import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Button from "@/components/Button/Button";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>
                    Better design for your degital products
                </h1>
                <p className={styles.desc}>
                    Turing you Idea into Reality. We bring together the teams from the global tech
                    industry.
                </p>
                <Button url="/portfolio" text="See Our Works" />
                {/* <button className={styles.button}></button> */}
            </div>
            <div className={styles.item}>
                <Image src={Hero} alt="Hero Image" className={styles.img}/>
            </div>
        </div>
    );
};

export default Home;
