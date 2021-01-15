import myWonderfulImage from './imageSrc.jpg';

const ProfilePhoto = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          src={myWonderfulImage}
          width="200px"
        />
        <span className="font-weight-bold">Leith</span>
        <span className="text-black-50">Leithgharbi@yahoo.fr</span>
        <span> </span>
      </div>
     
    </>
  );
};

export default ProfilePhoto;
