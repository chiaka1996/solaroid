import style from "./count.module.css"

const Count = () => {
    return ( 
        <div className={style.achievementCount}>
        <div>
        <div className={style.years}>5</div>
        <div className={style.year_details}>Years Of Experience</div>
        </div>
  
        <div>
        <div className={style.years}>53</div>
        <div className={style.year_details}>Projects Completed</div>
        </div>
  
        <div>
        <div className={style.years}>120</div>
        <div className={style.year_details}>Technical Supports</div>
        </div>
  
        <div>
        <div className={style.years}>173</div>
        <div className={style.year_details}>Satisfied Customers</div>
        </div>
  
      </div>
    )
}

export default Count;