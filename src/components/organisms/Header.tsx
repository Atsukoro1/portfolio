import { Component } from "solid-js";
import { T, TextBlock, Title } from "../atoms/Typography";

const getAge = () => {
    const birthdate = new Date('2005-08-04');
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    return age;
};

export const Header: Component = () => {
    return (
        <div class="md:mt-0 mt-10">
            <Title>O mně</Title>

            <TextBlock top>
                Jsem {getAge()}letý student a nadšenec do technologií. Své znalosti a dovednosti jsem vybudoval primárně
                v oblasti <T highlighted>Web developmentu</T> kde již několik let
                vyvíjím <T highlighted>webové stránky a aplikace</T> pro všemožné Eshopy a živnostníky.
            </TextBlock>

            <TextBlock>
                Mimo web development se věnuji UNIXovým systémům a jejich správě a grafickému
                vyobrazení (ricing), <T highlighted>fdfd</T> (HackTheBox, TryHackMe challenge) a taky nějaké té síťařině.
            </TextBlock>

            <TextBlock>
                Mezi mé zájmy mimo IT patří hlavně můj pes 🐕, strategické počítačové hry a rodina.
            </TextBlock>
        </div>
    )
}