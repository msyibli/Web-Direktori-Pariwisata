import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://image-tc.galaxy.tf/wijpeg-5fj3s48cv2nf9rs8mv5amtpab/select-room-one-bedroom-3.jpg?width=1920"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotel</h1>
          <h2>194 hotel</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://awsimages.detik.net.id/community/media/visual/2022/04/11/apartemen-klaska-residence-2.jpeg?w=700&q=90"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartemen</h1>
          <h2>294 apartemen</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://asset.kompas.com/crops/d-nSZsYOz1_vlmtgqODzgaeWEpg=/0x0:1074x716/750x500/data/photo/2022/09/20/6329d07cac8eb.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resort</h1>
          <h2>149 resort</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://asset.kompas.com/crops/ORngAQNGC1tyQ87yL6dWTdbXxUc=/0x0:1650x1100/750x500/data/photo/2021/02/15/6029f6eaa7758.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Vila</h1>
          <h2>212 vila</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn-cms.pgimgs.com/areainsider/2021/11/Alt-Text-Bobocabin-Cikole-Tempat-Bobo-bobo-dan-Hore-hore-Seru.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabin</h1>
          <h2>132 cabin</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
