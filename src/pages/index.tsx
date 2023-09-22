import { Header } from "@/Ui/Components/Header";
import { Loading } from "@/Ui/Components/Loading";
import HomePage from "@/Ui/Views/Homepage";
import useWindowDimensions from "@/hooks/useWindowDimension";
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [size, setSize] = useState(false);
  const [icon, setIcon] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [elementMounted, setElementMounted] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width! >= 700) {
      setSize(false);
    } else {
      setSize(true);
    }
  }, [width]);

  useEffect(() => {
    setTimeout(() => {
      setElementMounted(true);
      setShowLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    if (elementMounted) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIcon(false);
        } else {
          setIcon(true);
        }
      });

      const element = document.querySelector("#hideLogo");

      element && intersectionObserver.observe(element);

      // Clean up the observer when the component is unmounted
      return () => {
        intersectionObserver.disconnect();
      };
    }
  }, [elementMounted]);

  return (
    <>
      {showLoading ? (
        <Loading />
      ) : (
        <>
          <Link href={"https://wa.me/5511981748251"} target="_blank">
            <WhatsappLogo
              className={`${!size ? "actionCall" : "actionCallMobile"}`}
              size={62}
              weight="light"
            />
          </Link>
          <Header isVisible={icon} isMobile={size} />
          <HomePage size={size} />
        </>
      )}
    </>
  );
}
