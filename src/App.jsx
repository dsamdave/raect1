import "./App.css";
import Card from "./Components/Card";
import Home from "./Pages/Home";

const App = () => {

  const block = [
    {
      img: "https://imgs.search.brave.com/t-tH--M7t3nsMpAzR4-9LimN7uP7WTeSa5Qjz3bW1Y8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg0/NzcxMzAwL3Bob3Rv/L2NhcnMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUkta09w/VkFKajFYSkZwTjNE/ZG1xNXlzNXZLVWV3/Rk4tdUQ4QmwxbE5m/cmM9",
      title: "Helo",
      para: "hgcvhgfv "
    },
    {
      img: "https://imgs.search.brave.com/5oHhzrhqE6CEEQ4YKQ7X7hwS6Yi0_DfBKUfJpTg_44Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY4/NjIxMzEwL3Bob3Rv/L25ldy1hbmQtdXNl/ZC1jYXJzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1jMUFv/YXVoMG1DTmI1aDhj/YnBPLWtaOFJGbHJF/SFpIZ09mU3BSeDdD/NlBRPQ",
      title: "Helo tyrfgy7iutguitygh ytfvuyktgh",
      para: "hgcvhgfv "
    },
    {
      img: "https://imgs.search.brave.com/tgpbdC_LqrFdzWliUEp9GPhejatH4Vb2Rt_xeZSZiUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzczLzc1LzM5/LzM2MF9GXzY3Mzc1/Mzk1OV80WDVyOGZr/d3VxS216WFY0ODdy/UjZuNklzbWM4S3d0/SS5qcGc",
      title: "Helo",
      para: "hgcvhgfv "
    }
  ]


  return (
  <div>
    {
      block.map((each)=>(
        
        <Card img={each.img} title={each.title} para={each.para} />
      ))
    }
  </div>
)


};

export default App;
