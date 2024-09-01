import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        width={200}
        height={200}
        src="/image/WechatIMG94.jpg"
        alt="图片1"
      />
    </div>
  );
}
