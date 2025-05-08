"use client";

import { IMAGES } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useRef } from "react";
import classes from "./HomePagePartners.module.css";

const HomePagePartners = () => {
  const partners = [
    {
      name: "St. DOminic's",
      image: IMAGES.ST_DOMINICS,
    },
    {
      name: "Petra",
      image: IMAGES.PETRA,
    },
    {
      name: "Just Breathe",
      image: IMAGES.JUST_BREATHE,
    },
    {
      name: "Society for Vocation Support",
      image: IMAGES.SVS,
    },
    {
      name: "Extravaggant Praise",
      image: IMAGES.EXTRAVAGGANT_PRAISE,
    },

    {
      name: "Partner 1",
      image: IMAGES.PARTNER_1,
    },
    {
      name: "University of Lagos",
      image: IMAGES.UNILAG,
    },
    {
      name: "Partner 2",
      image: IMAGES.CYON,
    },
    {
      name: "Unusual Praise",
      image: IMAGES.UNUSUAL_PRAISE,
    },
  ];

  const repeatedPartners = [...partners, ...partners, ...partners, ...partners];

  // Refs
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Effects
  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const animate = () => {
      if (carousel) {
        carousel.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;

        if (scrollAmount >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    animate(); // Start animation

    return () => cancelAnimationFrame(animate as any);
  }, []);

  return (
    <section className={classes.container}>
      <h2>Partnered With</h2>

      <div ref={carouselRef}>
        {repeatedPartners.map((data, i) => (
          <Image
            src={data?.image}
            alt={data?.name}
            key={i}
            width={50}
            height={50}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePagePartners;
