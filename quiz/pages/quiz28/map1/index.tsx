import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function QuizKakaoMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=21da148329e9447c55831eab394b9234&autoload=false ";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4851, 126.8969), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const imageSrc =
          "https://cdn-icons.flaticon.com/png/512/6153/premium/6153497.png?token=exp=1650618241~hmac=783fd1ea48732dae7c9154f669c8cd4a"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(60, 60); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 마커가 표시될 위치입니다
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
          image: markerImage,
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);
  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }}></div>
      <div></div>
    </>
  );
}
