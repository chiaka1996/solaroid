import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useRouter } from 'next/router';

interface cartItemTypes{
  _id: string,
  productImage: string,
  availableQuantity: string,
  productName: string,
  productDescription: string,
  productCategory: string,
  productPrice: string,
  productQualities: string,
  productQuantity: string,
  cloudinaryId: string
}

type barContextType = {
    bar: boolean;
    openBar: () => void;
    closeBar: () => void;
    cartItems: cartItemTypes[];
    addToCart: (x:cartItemTypes) => void;
    buyNow: (x:cartItemTypes) => void
    deleteFromCart: (n:number) => void
    deleteAllFromCart: () => void;
    increaseItemQuantity: (n:number, prodAvailableQuantity:string) => void
    decreaseItemQuantity: (n:number, prodAvailableQuantity:string) => void
}


const barContextDefaultValues: barContextType = {
    bar: false,
    openBar: () => {},
    closeBar: () => {},
    cartItems: [],
    addToCart: (x:cartItemTypes) => {},
    buyNow: (x:cartItemTypes) => {},
    deleteFromCart: (n:number) => {},
    deleteAllFromCart: () => {},
    increaseItemQuantity: (n:number, prodAvailableQuantity:string) => {},
    decreaseItemQuantity: (n:number, prodAvailableQuantity) => {}
}

const BarContext = createContext<barContextType>(barContextDefaultValues);

export function BarState() {
    return useContext(BarContext);
  }

type Props = {
    children: ReactNode;
  };

  export const State = ({ children }: Props) => {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<cartItemTypes[]>([]);
    const [cartPriceList, setCartPriceList] = useState<number[]>([]);
    const [bar, setBar] = useState<boolean>(false)

    const openBar = () => {
        setBar(true);
      };
    
      const closeBar = () => {
        setBar(false);
      };

      // the buyNow function adds the item to the cart and redirect the user to 
      // the shopping details page.
      const buyNow = (x:cartItemTypes) => {
        //check if item exist in cart already
        for (let c = 0; c < cartItems.length; c++) {
          if (cartItems[c]._id == x._id) {
            router.push('/products/shipping_details')
            return;
          }
        }

        // add cartItem prices to separate array
        setCartPriceList(list => [...list, parseInt(x.productPrice)]);
        localStorage.setItem(
          'solaroidCartPriceList',
          JSON.stringify([...cartPriceList, parseInt(x.productPrice)])
        );
        
        //update item price based on the quantity selected
        const priceResult = parseInt(x.productPrice,10) * parseInt(x.productQuantity);
        x.productPrice = priceResult.toString();
        setCartItems(ite => [...ite, x]);
        localStorage.setItem('solaroidCartItem', JSON.stringify([...cartItems, x]));
        router.push('/products/shipping_details')
      }

      //function for adding items to the cart
      const addToCart = (x:cartItemTypes) => {
        //check if item exist in cart already
        for (let c = 0; c < cartItems.length; c++) {
          if (cartItems[c]._id == x._id) {
            router.push('/products/cart')
            return;
          }
        }

        // add cartItem prices to separate array
        setCartPriceList(list => [...list, parseInt(x.productPrice)]);
        localStorage.setItem(
          'solaroidCartPriceList',
          JSON.stringify([...cartPriceList, parseInt(x.productPrice)])
        );
        
        //update item price based on the quantity selected
        const priceResult = parseInt(x.productPrice,10) * parseInt(x.productQuantity);
        x.productPrice = priceResult.toString();
        setCartItems(ite => [...ite, x]);
        localStorage.setItem('solaroidCartItem', JSON.stringify([...cartItems, x]));
        router.push('/products/cart')
      }

      //function for deleting an item from cart
      const deleteFromCart = (n: number) => {
        cartItems.splice(n, 1);
        cartPriceList.splice(n,1)
        localStorage.setItem('solaroidCartItem', JSON.stringify([...cartItems]));
        localStorage.setItem('solaroidCartPriceList', JSON.stringify([...cartPriceList]));
        router.push('/products/cart')
      }

      //function for deleting all products from cart
      const deleteAllFromCart = () => {
        cartItems.splice(0);
        cartPriceList.splice(0)
        localStorage.setItem('solaroidCartItem', JSON.stringify([...cartItems]));
        localStorage.setItem('solaroidCartPriceList', JSON.stringify([...cartPriceList]));
      }

      // increase item quantity in cart
      const increaseItemQuantity = (n: number, prodAvailableQuantity:string) => {
       
       let mapper = cartItems.map((item, i) => {
          if (n == i) {
              if(parseInt(item.productQuantity) < parseInt(prodAvailableQuantity)){
            item.productPrice = ((parseInt(item.productQuantity) + 1) * cartPriceList[n]).toString();
            item.productQuantity = (parseInt(item.productQuantity) + 1).toString();
              }
            return item;
          }
          else{
            return item;
          }

        });
    setCartItems([...mapper]);
    localStorage.setItem('solaroidCartItem', JSON.stringify([...mapper]));
  };


    // decrease item quantity in cart
  const decreaseItemQuantity = (n: number) => {
    let mapper = cartItems.map((item, i) => {
      if (n == i) {
        if (parseInt(item.productQuantity) > 1) {
        item.productPrice = ((parseInt(item.productQuantity) -1) * cartPriceList[n]).toString();
        item.productQuantity = (parseInt(item.productQuantity) - 1).toString();
        }
        return item;
      }
      else{
        return item;
      }
    });
    setCartItems([...mapper]);
    localStorage.setItem('solaroidCartItem', JSON.stringify([...mapper]));
  };

      useEffect(() => {
        //get all datas in localstorage and update the states.
        let productsInCart = localStorage.getItem('solaroidCartItem');
        productsInCart = productsInCart ? JSON.parse(productsInCart) : '';
        productsInCart && typeof productsInCart !== "string" ? setCartItems(productsInCart) : '';

        let pricesInCart = localStorage.getItem('solaroidCartPriceList');
        pricesInCart = pricesInCart ? JSON.parse(pricesInCart) : '';
        pricesInCart && typeof pricesInCart !== "string" ? setCartPriceList(pricesInCart) : '';

      },[])

      const value = {
        bar,
        openBar,
        closeBar,
        cartItems,
        cartPriceList,
        addToCart,
        buyNow,
        deleteFromCart,
        deleteAllFromCart,
        increaseItemQuantity,
        decreaseItemQuantity
      }  
      
      return (
        <>
          <BarContext.Provider value={value}>{children}</BarContext.Provider>
        </>
      );
  }