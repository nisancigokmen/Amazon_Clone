import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Home from "./Home";
import Component from "./Component";
import Product from "./Product";
import LoginBtn from "./LoginBtn";
import Component2 from "./Component2";
import GalleryAnimated from "./GalleryAnimated";
import EndBar from "./EndBar";
import MovingBox from "./MovingBox";

function App() {
  return (
    <div className="App">
      <div className="App_Header">
        <Header />
      </div>

      <div className="App__Content">
        <Content />
      </div>

      <div className="App_Home">
        <Home />
      </div>

      <div className="App_Component">
        <Component />
      </div>

      <div className="App__Product">
        <Product
          title="Gaming accessories"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
          infos="Headsets"
          img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
          infos2="Keyboards"
          img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
          infos3="Computer mice"
          img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
          infos4="Chairs"
        />

        <Product
          title="Shop by Category"
          img="https://3.bp.blogspot.com/-eoJppajzouc/WoMIFwvLiUI/AAAAAAABpZs/AT7qYmvTleIzIcCgcjpbpB_tRxtXC7UKQCLcBGAs/w1200-h630-p-k-no-nu/computer-scegliere.jpg"
          infos="Computers & Accessories"
          img2="https://www.siamvr.com/wp-content/uploads/2020/06/playstation-5-hd-camera-psvr-2-tracking-3.jpg"
          infos2="Video Games"
          img3="https://cdnd.babymall.com.tr/product/1000x1000/23193-bebetto-kozmonot-bruin-mavi-3-6-ay-1.jpg"
          infos3="Baby "
          img4="https://cdnd.babymall.com.tr/product/1000x1000/22373-displayde-pilli-isikli-yengec-2.jpg"
          infos4="Toys & Games"
        />

        <Component2
          title="Health & Personal Care"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
        />

        <div className="App_LoginPage">
          <LoginBtn title="Sign in for the best experience" />
        </div>
      </div>

      <div className="App_Component2">
        <Component2
          title="Beauty picks"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
        />

        <Component2
          title="Electronics"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />

        <Component2
          title="Dresses"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
        />

        <Component2
          title="Deals & Promotions"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
        />
      </div>

      <div className="App__GalleryAnimated">
        <GalleryAnimated
          title="Frequently repurchased in Supplies"
          img="https://m.media-amazon.com/images/I/71TTg55EIAL._AC_SY200_.jpg"
          img2="https://m.media-amazon.com/images/I/71EFti6MCkL._AC_SY200_.jpg"
          img3="https://m.media-amazon.com/images/I/31zErw7npdL._AC_SY200_.jpg"
          img4="https://m.media-amazon.com/images/I/71ySaVf51dL._AC_SY200_.jpg"
          img5="https://m.media-amazon.com/images/I/81eBWd1nUTL._AC_SY200_.jpg"
          img6="https://m.media-amazon.com/images/I/71F2R35mqNL._AC_SY200_.jpg"
          img7="https://m.media-amazon.com/images/I/41q29UD67IL._AC_SY200_.jpg"
        />

        <GalleryAnimated
          title="Popular products in PC internationall"
          img="https://m.media-amazon.com/images/I/71qA45tWZ5L._AC_SY200_.jpg"
          img2="https://m.media-amazon.com/images/I/61N5Y36wK0L._AC_SY200_.jpg"
          img3="https://m.media-amazon.com/images/I/81vkjxbO-rL._AC_SY200_.jpg"
          img4="https://m.media-amazon.com/images/I/71DkL7k9yjL._AC_SY200_.jpg"
          img5="https://m.media-amazon.com/images/I/71rTa0S8xDS._AC_SY200_.jpg"
          img6="https://m.media-amazon.com/images/I/51lf7EcOFeL._AC_SY200_.jpg"
          img7="https://m.media-amazon.com/images/I/71p3Ygm14wL._AC_SY200_.jpg"
        />
      </div>

      <div className="App__Product">
        <Component2
          title="New arrivals in Toys"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
        />

        <Product
          title="Comfy styles for her"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
          infos="   Sweatshirts"
          img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg"
          infos2="Joggers"
          img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg"
          infos3="Cardigans"
          img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg"
          infos4="Easy tees"
        />

        <Product
          title="Gaming merchandise"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg"
          infos="Apparel"
          img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg"
          infos2="Hats"
          img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg"
          infos3="Action figures"
          img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg"
          infos4="Mugs"
        />

        <Component2
          title="Kindle E readers"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"
        />
      </div>

      <div className="App__GalleryAnimated">
        <GalleryAnimated
          title="Top Sellers in Books for you"
          img="https://m.media-amazon.com/images/I/61mJSBjur8L._AC_SY200_.jpg"
          img2="https://m.media-amazon.com/images/I/41Sr6RLvk-L._AC_SY200_.jpg"
          img3="https://m.media-amazon.com/images/I/61tQyKvQSxL._AC_SY200_.jpg"
          img4="https://m.media-amazon.com/images/I/71lPCjmbRQL._AC_SY200_.jpg"
          img5="https://m.media-amazon.com/images/I/61HSmifqMbL._AC_SY200_.jpg"
          img6="https://m.media-amazon.com/images/I/71+LbS73lGL._AC_SY200_.jpg"
          img7="https://m.media-amazon.com/images/I/71pPk7j4sSS._AC_SY200_.jpg"
        />

        <GalleryAnimated
          title="Stuffed Animals & Toys under $10"
          img="https://m.media-amazon.com/images/I/81-RlWFdRrL._AC_SY200_.jpg"
          img2="https://m.media-amazon.com/images/I/81ZB62prn-L._AC_SY200_.jpg"
          img3="https://m.media-amazon.com/images/I/71KUNPdl7dL._AC_SY200_.jpg"
          img4="https://m.media-amazon.com/images/I/51TQ4+rSd7L._AC_SY200_.jpg"
          img5="https://m.media-amazon.com/images/I/814iawRsybL._AC_SY200_.jpg"
          img6="https://m.media-amazon.com/images/I/71msxzqxUbL._AC_SY200_.jpg"
          img7="https://m.media-amazon.com/images/I/91c6YQrtQLL._AC_SY200_.jpg"
        />
      </div>

      <div className="App__Product">
        <Component2
          title="International top sellers in Kitchen  "
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fretrofilmcamera.com%2Fwp-content%2Fuploads%2F2019%2F12%2FDSF3910.jpg%3Ffit%3D2400%252C1800%26ssl%3D1&f=1&nofb=1"
        />
        <Component2
          title="Shop activity trackers and smartwatches "
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
        />
        <Component2
          title="International top sellers in Home  "
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.i9HSW0o1I7TDGNCPf49kMgHaHK%26pid%3DApi&f=1"
        />
        <Component2
          title=" Top Sellers in Toys for you"
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3i1e5d437yd84efcy34dardm-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fcrate-creatures-sizzle-collectable-toy.jpg&f=1&nofb=1"
        />
      </div>

      <div className="App__GalleryAnimated">
        <GalleryAnimated
          title="Frequently repurchased in Home"
          img="https://m.media-amazon.com/images/I/81DwO7ZZs2L._AC_SY200_.jpg"
          img2="https://m.media-amazon.com/images/I/81mcBqxldcL._AC_SY200_.jpg"
          img3="https://m.media-amazon.com/images/I/71S4-y6HwzS._AC_SY200_.jpg"
          img4="https://m.media-amazon.com/images/I/614oDgWMPzL._AC_SY200_.jpg"
          img5="https://m.media-amazon.com/images/I/91Yc0QpvrqL._AC_SY200_.jpg"
          img6="https://m.media-amazon.com/images/I/61gZwgOyzOL._AC_SY200_.jpg"
          img7="https://m.media-amazon.com/images/I/41wkGHCrX0S._AC_SY200_.jpg"
        />

        <GalleryAnimated
          title="International top sellers"
          img="https://m.media-amazon.com/images/I/71u7wSIU-3L._AC_SY200_.jpg"
          img2="https://m.media-amazon.com/images/I/51gCXtjJKhL._AC_SY200_.jpg"
          img3="https://m.media-amazon.com/images/I/81VzbZ6FwzL._AC_SY200_.jpg"
          img4="https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_SY200_.jpg"
          img5="https://m.media-amazon.com/images/I/81mUFMFwSNL._AC_SY200_.jpg"
          img6="https://m.media-amazon.com/images/I/71bl16p1c0L._AC_SY200_.jpg"
          img7="https://m.media-amazon.com/images/I/81wgcld4wxL._AC_SY200_.jpg"
        />
      </div>

      <div className="App__Product">
        <Component2
          title="Shop Pet supplies"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
        />
        <Component2
          title="For your Fitness Needs"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
        />
        <Component2
          title="Shop Laptops & Tablets"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
        />
        <Component2
          title="International top sellers in Home Improvement "
          img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdekorasyonankara.com%2Fresimler%2Fevofistadilati.jpg&f=1&nofb=1"
        />
      </div>

      <div className="App__GalleryAnimated">
        <GalleryAnimated
          title="Popular Gifts in Baby"
          img="https://m.media-amazon.com/images/I/61t1RCXkuLL._AC_SY200_.jpg"
          img2="https://m.media-amazon.com/images/I/713MPkqEyoL._AC_SY200_.jpg"
          img3="https://m.media-amazon.com/images/I/81gWQOAReLL._AC_SY200_.jpg"
          img4="https://m.media-amazon.com/images/I/81A8CTc6icL._AC_SY200_.jpg"
          img5="https://m.media-amazon.com/images/I/91cmJZhpc9L._AC_SY200_.jpg"
          img6="https://m.media-amazon.com/images/I/819ch6yZJYL._AC_SY200_.jpg"
          img7="https://m.media-amazon.com/images/I/61q1Cq1IYCL._AC_SY200_.jpg"
        />
      </div>

      {/*moving box (gallery) */}

      <div className="App__movingBox">
        <MovingBox
          hometitle="Inspired by your browsing history"
          img="https://images-na.ssl-images-amazon.com/images/I/91ML36Y33TL._AC_UL160_SR160,160_.jpg"
          title="Chronicle: The 20 Greatest Hits"
          star="https://img.icons8.com/fluency/344/star.png"
          infos="Creedence Clearwater ..."
          pay="$22.01"
          payTse="$15.37 shipping"
        />

        <MovingBox
          img="https://images-na.ssl-images-amazon.com/images/I/81evsr3Oq0L._AC_UL160_SR160,160_.jpg"
          title="Led Zeppelin IV Remastered Original"
          star="https://img.icons8.com/fluency/344/star.png"
          infos="Led Zeppelin "
          pay="$25.98"
        />

        <MovingBox
          img="https://images-na.ssl-images-amazon.com/images/I/71OV2V9WchL._AC_UL160_SR160,160_.jpg"
          title="Appetite For Destruction Remastered"
          star="https://img.icons8.com/fluency/344/star.png"
          infos="Guns N' Roses"
          pay="      $33.99 "
          payTse="  $16.85 shipping"
        />

        <MovingBox
          img="https://images-na.ssl-images-amazon.com/images/I/81dUVKQDBEL._AC_UL160_SR160,160_.jpg"
          title="Abbey Road Anniversary"
          star="https://img.icons8.com/fluency/344/star.png"
          infos="The Beatles"
          pay="$19.75 "
          payTse="$14.48 shipping"
        />

        <MovingBox
          img="https://images-na.ssl-images-amazon.com/images/I/51DWv2t4UVL._AC_UL160_SR160,160_.jpg"
          title="
              Legend"
          star="https://img.icons8.com/fluency/344/star.png"
          infos="Bob Marley"
          pay="$26.14"
        />

        <MovingBox
          img="https://images-na.ssl-images-amazon.com/images/I/91xCpe6mIgL._AC_UL160_SR160,160_.jpg"
          title="        Tom Petty & the Heartbreakers - Greatest Hits"
          star="https://img.icons8.com/fluency/344/star.png"
          infos="Tom Petty"
          pay="    $21.73 "
          payTse="    
              $16.48 shipping"
        />
      </div>

      {/* end bar */}
      <div className="App__endBar">
        <EndBar
          title="Get to Know Us"
          title2="Make Money with Us"
          title3="Amazon Payment Products"
          title4="Let Us Help You"
        />
      </div>
    </div>
  );
}

export default App;
