const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    // heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    // paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    headingHero: "font-poppins font-semibold text-6xl leading-tight text-white",
    title: "font-nunitoSans font-semibold text-base leading-loose text-blue",
    paragraph: "font-poppins font-regular text-base leading-relaxed text-paragraph",
    headingStats: "font-poppins font-medium text-4xl leading-snug text-white",
    heading: "font-poppins font-semibold text-5xl leading-tight text-white",
    headingInterests: "font-poppins font-medium text-xl leading-relaxed text-white",
    headingQuotes: "font-poppins font-medium text-2xl sm:text-5xl leading-relaxed text-white",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
  