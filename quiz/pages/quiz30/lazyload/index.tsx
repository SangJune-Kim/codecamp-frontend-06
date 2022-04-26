import LazyLoad from "react-lazy-load";

export default function QuizLazyLoadPage() {
  return (
    <>
      <div>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://drscdn.500px.org/photo/90842265/m%3D900/v2?sig=63ab268c6034cfedd20821b2e1e3993ac4383de6ab0e7917691b81bf76ec7be8"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="data:image/jpeg;base64,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"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://tractive.com/blog/wp-content/uploads/2016/04/puppy-care-guide-for-new-parents.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://www.pitpat.com/wp-content/uploads/2020/12/Dog_-rights_MS_outdoors_active_puppy_running_white_black_gold-dog-_@ilaanddrax-1.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://www.akc.org/wp-content/uploads/2021/09/Finnish-Lapphund-shutterstock_1038964219.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/1600464166638-5C0HPLJ9HT1TZBEHWVJR/Screen+Shot+2020-09-17+at+2.44.15+PM.png"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://media.istockphoto.com/photos/happy-puppy-dog-running-on-playground-green-yard-picture-id1197074302?k=20&m=1197074302&s=612x612&w=0&h=lSFkBMEwo4VnNAPuRVv-nAuc5dp1k1E62or2b70SbZs="
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://peachonaleash.com/wp-content/uploads/2018/12/shutterstock_529323067.jpg"
          />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={0}>
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://static.standard.co.uk/2021/03/31/10/31102735-8f73fe28-bc47-48dd-a19f-72ef250f893e.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart"
          />
        </LazyLoad>
      </div>
    </>
  );
}
