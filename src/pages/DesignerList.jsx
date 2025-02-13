import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import designer2second from "./../assets/designer_2second.png";
import tsportfolio1 from "./../assets/tsportfolio1.png";
import tsportfolio2 from "./../assets/tsportfolio2.png";
import location from "./../assets/location.png";
import "../styles/DesignerList.css";

function DesignerList() {
  const navigate = useNavigate();
  const { type } = useParams();

  const designers = [
    {
      id: 1,
      name: "이초 디자이너",
      location: "서울 강남구 압구정로79길",
      area: "강남/청담/압구정",
      specialty: "펌",
      price: { offline: 40000, online: 20000 },
      type: ["대면", "비대면"],
      description: "레드벨벳, 있지가 방문하는 샵",
      image: "https://via.placeholder.com/150",
      rating: 4.9,
      reviewCount: 156,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 2,
      name: "로로 원장",
      location: "서울 마포구 어울마당로 19",
      area: "홍대/연남/합정",
      specialty: "탈염색",
      price: { offline: 40000, online: 34000 },
      type: ["대면", "비대면"],
      description: "화이트 베이지 브라운 전문",
      image: "https://via.placeholder.com/150",
      rating: 4.8,
      reviewCount: 142,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 3,
      name: "슈 대표원장",
      location: "서울 마포구 동교로 255",
      area: "홍대/연남/합정",
      specialty: "탈염색",
      price: { offline: 41000, online: 20000 },
      type: ["대면"],
      description: "차별화 된 탈색 & 염색 노하우 기법, 꼼꼼한 컨설팅",
      image: "https://via.placeholder.com/150",
      rating: 5.0,
      reviewCount: 189,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 4,
      name: "랑 원장",
      location: "서울 마포구 와우산로 101",
      area: "홍대/연남/합정",
      specialty: "탈염색",
      price: { offline: 41000, online: 34000 },
      type: ["대면", "비대면"],
      description: "Customized only for you!",
      image: "https://via.placeholder.com/150",
      rating: 4.9,
      reviewCount: 167,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 5,
      name: "히지 디자이너",
      location: "서울 성동구 왕십리로8길 3",
      area: "성수/건대",
      specialty: "펌",
      price: { offline: 31000, online: 20000 },
      type: ["비대면"],
      description: "퍼스널 맞춤형 컬러 추천",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
      reviewCount: 98,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 6,
      name: "현영 디자이너",
      location: "서울 성동구 왕십리로 106",
      area: "성수/건대",
      specialty: "탈염색",
      price: { offline: 30000, online: 34000 },
      type: ["대면", "비대면"],
      description: "편안한 분위기와 부드러운 디자인",
      image: "https://via.placeholder.com/150",
      rating: 4.8,
      reviewCount: 145,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 7,
      name: "나나 디자이너",
      location: "서울 성동구 성수일로4길 33",
      area: "성수/건대",
      specialty: "염색",
      price: { offline: 32000, online: 34000 },
      type: ["대면"],
      description: "얼굴형 고민을 기쁨으로 바꿔드려요",
      image: "https://via.placeholder.com/150",
      rating: 4.9,
      reviewCount: 178,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 8,
      name: "이아 디자이너",
      location: "서울 성동구 성수일로6길",
      area: "성수/건대",
      specialty: "탈염색",
      price: { offline: 40000, online: 20000 },
      type: ["대면", "비대면"],
      description: "편안한 분위기, 1:1 맞춤 상담 디자인",
      image: "https://via.placeholder.com/150",
      rating: 4.8,
      reviewCount: 134,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 9,
      name: "주 디자이너",
      location: "서울 성동구 왕십리로2길",
      area: "성수/건대",
      specialty: "염색",
      price: { offline: 41000, online: 34000 },
      type: ["비대면"],
      description: "작은 차이로 달라지는 나만의 특별한 분위기",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
      reviewCount: 112,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 10,
      name: "희 수석디자이너",
      location: "서울 강남구 논현로85길 43",
      area: "강남/청담/압구정",
      specialty: "탈염색",
      price: { offline: 40000, online: 34000 },
      type: ["대면", "비대면"],
      description: "가치를 높여주는 이상적인 스타일을 찾아드려요",
      image: "https://via.placeholder.com/150",
      rating: 5.0,
      reviewCount: 223,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 11,
      name: "시오 부원장",
      location: "서울 서초구 강남대로97길",
      area: "강남/청담/압구정",
      specialty: "염색",
      price: { offline: 30000, online: 22000 },
      type: ["대면"],
      description: "트렌디한 감성, 섬세한 손길로 새로운 모습을",
      image: "https://via.placeholder.com/150",
      rating: 4.8,
      reviewCount: 156,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 12,
      name: "휘리 원장",
      location: "서울 마포구 양화로7안길 12",
      area: "홍대/연남/합정",
      specialty: "펌",
      price: { offline: 40000, online: 20000 },
      type: ["대면", "비대면"],
      description: "대한민국 상위 1% 단발머리 전문가",
      image: "https://via.placeholder.com/150",
      rating: 5.0,
      reviewCount: 245,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 13,
      name: "유하 디자이너",
      location: "서울 마포구 잔다리로 48",
      area: "홍대/연남/합정",
      specialty: "염색",
      price: { offline: 34000, online: 34000 },
      type: ["대면"],
      description: "누구나 손질 가능한 디자인",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
      reviewCount: 132,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 14,
      name: "은이 수석디자이너",
      location: "서울 마포구 홍익로5길",
      area: "홍대/연남/합정",
      specialty: "펌",
      price: { offline: 32000, online: 20000 },
      type: ["대면", "비대면"],
      description: "일상 속에 스며드는 아름다움, 높은 재방문률",
      image: "https://via.placeholder.com/150",
      rating: 4.9,
      reviewCount: 187,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 15,
      name: "미미 컬러리스트",
      location: "서울 마포구 양화로 100",
      area: "서울 전체",
      specialty: "염색",
      price: { offline: 41000, online: 34000 },
      type: ["비대면"],
      description: "오로지 당신을 위한 컬러",
      image: "https://via.placeholder.com/150",
      rating: 4.8,
      reviewCount: 165,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
    {
      id: 16,
      name: "하루 컬러리스트",
      location: "서울 마포구 홍익로 3",
      area: "서울 전체",
      specialty: "펌",
      price: { offline: 40000, online: 20000 },
      type: ["대면", "비대면"],
      description: "끊어짐, 얼룩없는 뿌리탈색, 저손상 블랙빼기 전문",
      image: "https://via.placeholder.com/150",
      rating: 4.9,
      reviewCount: 198,
      portfolio: [tsportfolio1, tsportfolio2, tsportfolio1],
    },
  ];

  const handleDesignerSelect = (designerId) => {
    navigate(`/designer/${type}/${designerId}`);
  };

  return (
    <div className="designer-container">
      <Header text={"대면 디자이너 검색"} />
      <div className="designer-list">
        {designers
          .filter((designer) =>
            type === "offline"
              ? designer.type.includes("대면")
              : designer.type.includes("비대면")
          )
          .map((designer) => (
            <div
              key={designer.id}
              className="designer-card"
              onClick={() => handleDesignerSelect(designer.id)}
            >
              <div className="desinger-info">
                <img
                  src={designer2second} // designer.image로 바꾸기
                  alt={designer.name}
                  className="designer-image"
                />
                <div className="designer-text">
                  <h2>{designer.name}</h2>
                  <p className="area">
                    <img src={location} />
                    {designer.area}
                    <span className="specialty">
                      {designer.specialty}
                    </span>
                  </p>
                  <p className="description">{`# ${designer.description}`}</p>
                </div>
                <button className="select-reserve-button">
                  예약하기
                </button>
              </div>
              {/* 디자이너 포트폴리오 이미지 */}
              <div className="designer-portfolio">
                {designer.portfolio.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${designer.name} 포트폴리오 ${index + 1}`}
                    className="portfolio-image"
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default DesignerList;
