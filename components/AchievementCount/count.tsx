import CountUp from 'react-countup';
import style from "./count.module.css"

const Count = () => {
    return ( 
        <div className={style.achievementCount}>
        <div>
        <div className={style.years}>
        <CountUp end={5} enableScrollSpy />
        </div>
        <div className={style.year_details}>Years Of Experience</div>
        </div>
  
        <div>
        <div className={style.years}> 
        <CountUp end={53} enableScrollSpy />
        </div>
        <div className={style.year_details}>Projects Completed</div>
        </div>
  
        <div>
        <div className={style.years}>
        <CountUp end={120} enableScrollSpy />
        </div>
        <div className={style.year_details}>Technical Supports</div>
        </div>
  
        <div>
        <div className={style.years}>
        <CountUp end={173} enableScrollSpy />
        </div>
        <div className={style.year_details}>Satisfied Customers</div>
        </div>
  
      </div>
    )
}

export default Count;