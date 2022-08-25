/*import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const incrementValue = () => {
        setCount((prev) => prev + 1)

    }
      <Topnavbar></Topnavbar>
      <Routes>
 <Route path='/' element={<Home />}></Route>
<Route path='aboutus' element={<AboutUs />}></Route>
  <Route path='employee' element={<Employee />}></Route>
  <Route path='*' element={<Error />}></Route>
  
  
                
          </Routes>

    const incrementValue2 = () => {
        setCount2(prev => prev + 1)
    }



    const isEven = useMemo((e) => {
        let i = 0
        while (i < 200000000) {
            i++
        }

        if (count % 2 == 0) {
            return true
        }
        else {
            return false
        }
    }, [count])

    return (
        <>
            <div>
                <button onClick={incrementValue}>Value - {count}</button>
                <span>{isEven ? 'EVEN' : 'ODD'}</span>
            </div>
            <div>
                <button onClick={incrementValue2}>Value - {count2}</button>
                <span></span>
            </div>

        </>
    )
}

export default UseMemo*/
