import svgPaths from "./svg-p629s4qabc";
import imgZirccleExperience from "./811f0aa41b5b2dd6b07d4a7507e6cec94f8c4b01.png";
import imgDigitizingWardrobe from "./09b9f511393d55e5b4c7f71a38b58927e33d7c7d.png";
import imgStyleSuggestion from "./02a41e1733fda8d5b8dbd6282fd7ea277f53eec3.png";
import imgCalendarPlanningView from "./32d5f93d2b9741617a11ebe0d9546063196cf5ef.png";

function Background() {
  return (
    <div className="bg-[#e5e1e7] content-stretch flex flex-col items-center px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#591162] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">PLATFORM FEATURES</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
      <Background />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 max-w-[896px] pb-[0.585px] px-[17.44px] top-[-0.81px]" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#591162] text-[64px] text-center tracking-[-1.28px] whitespace-nowrap">
        <p className="leading-[70.4px] mb-0">Every tool you need to master</p>
        <p className="leading-[70.4px]">your wardrobe.</p>
      </div>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="h-[172.78px] max-w-[896px] relative shrink-0 w-[896px]" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 max-w-[672px] px-[7.22px] top-[-0.6px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Zirccle combines advanced AI with intuitive design to help you digitize, organize,</p>
        <p className="leading-[28.8px]">and plan your style effortlessly.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[105.59px] max-w-[672px] relative shrink-0 w-[672px]" data-name="Margin">
      <Container />
    </div>
  );
}

function ZirccleExperience() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Zirccle Experience">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[186.67%] left-0 max-w-none top-[-43.33%] w-full" src={imgZirccleExperience} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[600px] items-start justify-center overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Overlay+Shadow">
      <ZirccleExperience />
      <div className="absolute bg-gradient-to-t from-[rgba(89,17,98,0.2)] inset-0 to-[rgba(89,17,98,0)]" data-name="Gradient" />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Hero Section">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] px-[80px] py-[120px] relative size-full">
          <Margin />
          <Heading1Margin />
          <Margin1 />
          <OverlayShadow />
        </div>
      </div>
    </div>
  );
}

function DigitizingWardrobe() {
  return (
    <div className="max-w-[548px] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[482px]" data-name="Digitizing Wardrobe">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-[-3.11%] max-w-none size-[106.22%] top-[-3.11%]" src={imgDigitizingWardrobe} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p23c4d380} fill="var(--fill-0, #591162)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#dcd9d9] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p15b83880} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#732c7b] left-[-12px] rounded-[9999px] size-[48px] top-0" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[36px]" data-name="Margin">
      <BackgroundBorder1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Margin2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">Instant AI background removal</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#f6f3f2] col-1 drop-shadow-[0px_4px_10px_rgba(115,44,123,0.05)] justify-self-stretch relative rounded-[24px] row-1 self-center shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(211,194,207,0.3)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[33px] relative size-full">
        <DigitizingWardrobe />
        <Container1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#591162] text-[32px] w-full">
        <p className="leading-[41.6px]">Smart Wardrobe</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[18px] w-full">
        <p className="leading-[28.8px] mb-0">Stop forgetting what you own. Snap a photo of your clothes, and</p>
        <p className="leading-[28.8px] mb-0">our AI instantly removes backgrounds, categorizes items, and tags</p>
        <p className="leading-[28.8px]">them by color, season, and occasion.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[26px] relative shrink-0 w-[22px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 26">
        <g id="Margin">
          <path d={svgPaths.pccc3200} fill="var(--fill-0, #591162)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1c1b1b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">One-Tap Digitization</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container9 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Upload entire outfits in minutes with multi-photo processing.</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin3 />
      <Container8 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g id="Margin">
          <path d={svgPaths.p1c7de000} fill="var(--fill-0, #591162)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1c1b1b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Smart Inventory Management</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container11 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Track usage frequency and cost-per-wear for every item.</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin4 />
      <Container10 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-px relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[23px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="h-[24px] relative shrink-0 w-[30px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 24">
          <path d={svgPaths.p6136500} fill="var(--fill-0, #591162)" id="Icon" />
        </svg>
      </div>
      <Heading1 />
      <Container7 />
      <List />
    </div>
  );
}

function SectionFeature1SmartWardrobe() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_628px] relative shrink-0 w-[1120px]" data-name="Section - Feature 1: Smart Wardrobe">
      <BackgroundBorderShadow />
      <Container6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[27px] mb-[-0.6px] relative shrink-0 w-[30px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 27">
        <g id="Container">
          <path d={svgPaths.pc691f60} fill="var(--fill-0, #591162)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-0.6px] pb-[0.59px] pt-[15.6px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#591162] text-[32px] text-center whitespace-nowrap">
        <p className="leading-[41.6px]">AI Style Suggestions</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Your personal stylist, available 24/7. Get recommendations based on your unique</p>
        <p className="leading-[28.8px]">style profile and daily needs.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Heading2 />
      <Container15 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[33.6px]">Weather-Ready</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] mb-0">Daily outfit ideas that sync with your</p>
        <p className="leading-[24px] mb-0">local forecast. Never be caught off-</p>
        <p className="leading-[24px]">guard again.</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#732c7b] relative rounded-[24px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[39.4px] pt-[32px] px-[32px] relative size-full">
        <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
            <path d={svgPaths.p3d4013a0} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
        <Heading3 />
        <Container17 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#591162] text-[24px] w-full">
          <p className="leading-[33.6px]">Occasion Specific</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[16px] w-full">
          <p className="leading-[24px] mb-0">Filter suggestions for meetings, dates,</p>
          <p className="leading-[24px]">or weekend getaways.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#e5e1e7] relative rounded-[24px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(211,194,207,0.3)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[64.4px] pt-[33px] px-[33px] relative size-full">
        <div className="h-[25px] relative shrink-0 w-[22.5px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 25">
            <path d={svgPaths.p1a332780} fill="var(--fill-0, #591162)" id="Icon" />
          </svg>
        </div>
        <Heading4 />
        <Container18 />
      </div>
    </div>
  );
}

function SideBentoCards() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Side Bento Cards">
      <Background1 />
      <BackgroundBorder2 />
    </div>
  );
}

function StyleSuggestion() {
  return (
    <div className="absolute inset-[0_0.01px_0_0] opacity-80" data-name="Style Suggestion">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[147.73%] left-0 max-w-none top-[-23.87%] w-full" src={imgStyleSuggestion} />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#591162] text-[24px] w-full">
        <p className="leading-[33.6px]">Dynamic Outfit Generation</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[16px] w-full">
        <p className="leading-[25.6px] mb-0">Mix and match what you already own in ways</p>
        <p className="leading-[25.6px]">you never thought of.</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col gap-[6.805px] items-start max-w-[384px] p-[24px] relative rounded-[16px] shrink-0 w-[384px]" data-name="Overlay+OverlayBlur">
      <Heading5 />
      <Container19 />
    </div>
  );
}

function MainBentoCard() {
  return (
    <div className="bg-[#f0eded] col-[1/span_8] h-[500px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Main Bento Card">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[32px] relative size-full">
          <StyleSuggestion />
          <OverlayOverlayBlur />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_500px] relative shrink-0 w-full" data-name="Container">
      <SideBentoCards />
      <MainBentoCard />
    </div>
  );
}

function Container12() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[63.99px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container13 />
        <Container16 />
      </div>
    </div>
  );
}

function SectionFeature2AiStyleSuggestionsBentoStyle() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[120px] relative shrink-0 w-full" data-name="Section - Feature 2: AI Style Suggestions (Bento Style)">
      <Container12 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#591162] text-[32px] w-full">
        <p className="leading-[41.6px]">Plan with Confidence</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[18px] w-full">
        <p className="leading-[28.8px] mb-0">Map out your week in advance. Our visual calendar makes it easy</p>
        <p className="leading-[28.8px]">{`to schedule looks and track what you've worn.`}</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#591162] text-[16px] w-full">
          <p className="leading-[24px]">Morning Routine</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[14px] tracking-[0.7px] w-full">
          <p className="leading-[14px] mb-0">Reduce decision fatigue and</p>
          <p className="leading-[14px] mb-0">save 15 minutes every</p>
          <p className="leading-[14px]">morning.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(211,194,207,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#591162] text-[16px] w-full">
          <p className="leading-[24px]">Packing Lists</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[14px] tracking-[0.7px] w-full">
          <p className="leading-[14px] mb-0">Generate smart packing lists</p>
          <p className="leading-[14px] mb-0">for trips based on your</p>
          <p className="leading-[14px]">itinerary.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(211,194,207,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_124px] pt-[1.01px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[23px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="h-[30px] relative shrink-0 w-[27px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 30">
          <path d={svgPaths.p37fa5680} fill="var(--fill-0, #591162)" id="Icon" />
        </svg>
      </div>
      <Heading6 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#591162] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">May 2024</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #5F5E63)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #5F5E63)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[12px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-start relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f6f3f2] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(211,194,207,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative size-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function CalendarPlanningView() {
  return (
    <div className="aspect-[546/546] relative shrink-0 w-full" data-name="Calendar Planning View">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCalendarPlanningView} />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <CalendarPlanningView />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(211,194,207,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(115,44,123,0.05)]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(115,44,123,0.1)] blur-[32px] right-[-40px] rounded-[9999px] size-[160px] top-[-40px]" data-name="Decorative elements" />
      <div className="absolute bg-[rgba(247,217,251,0.2)] blur-[32px] bottom-[-40px] left-[-40px] rounded-[9999px] size-[240px]" data-name="Overlay+Blur" />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function SectionFeature3PlanWithConfidence() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_605px] relative shrink-0 w-[1120px]" data-name="Section - Feature 3: Plan with Confidence">
      <Container20 />
      <Container27 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.59px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[32px] text-center text-white whitespace-nowrap">
        <p className="leading-[41.6px]">Be the first to experience Zirccle</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[576px] opacity-90 relative shrink-0 w-[576px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Join the waitlist and get early access, exclusive updates, and style</p>
        <p className="leading-[28.8px]">tips straight to your inbox.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, white)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[normal]">Enter your email address</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[9px] relative size-full">
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] flex-[1_0_0] min-w-px relative rounded-[8px] self-stretch" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[5px] relative size-full">
          <Margin5 />
          <Input />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[32px] py-[13px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#591162] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Get first access</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[448px] pt-[16.6px] relative shrink-0 w-[448px]" data-name="Container">
      <OverlayBorderOverlayBlur />
      <Button />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.pf270e00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center justify-center opacity-70 pt-[0.6px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">No spam. You can unsubscribe anytime.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[23.4px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container33 />
      <Container34 />
      <Container37 />
    </div>
  );
}

function CallToActionFooterSection() {
  return (
    <div className="bg-[#732c7b] content-stretch flex flex-col items-start overflow-clip pb-[64px] pt-[63px] px-[64px] relative rounded-[32px] shrink-0 w-[1120px]" data-name="Call to Action Footer Section">
      <div className="absolute inset-[0_0_-0.2px_0] opacity-50" style={{ backgroundImage: "linear-gradient(160.292deg, rgb(89, 17, 98) 0%, rgba(89, 17, 98, 0) 100%)" }} data-name="Gradient" />
      <Container32 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionFeature1SmartWardrobe />
      <SectionFeature2AiStyleSuggestionsBentoStyle />
      <SectionFeature3PlanWithConfidence />
      <CallToActionFooterSection />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#732c7b] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Z</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#591162] text-[24px] tracking-[2.4px] whitespace-nowrap">
        <p className="leading-[33.6px]">ZIRCCLE</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container41 />
    </div>
  );
}

function Link() {
  return (
    <div className="relative self-stretch shrink-0 w-[44.98px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">About</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative self-stretch shrink-0 w-[52.69px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">Privacy</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative self-stretch shrink-0 w-[45.36px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">Terms</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative self-stretch shrink-0 w-[60.98px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">Contact</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[32px] h-[25.59px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_929)" id="SVG">
          <path d={svgPaths.p3fd34e00} fill="var(--fill-0, #4F434E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_929">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_926)" id="SVG">
          <path d={svgPaths.p2c0de60} fill="var(--fill-0, #4F434E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_926">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1b77d00} fill="var(--fill-0, #4F434E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <Svg2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[16px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container39() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[80px] py-[32px] relative size-full">
          <Container40 />
          <Container42 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[14px]">© 2024 Zirccle. Your style journey, simplified.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(211,194,207,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[16px] pt-[17px] px-[80px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#fcf9f8] content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#d3c2cf] border-solid border-t inset-0 pointer-events-none" />
      <Container39 />
      <HorizontalBorder />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#732c7b] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Z</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#591162] text-[24px] tracking-[2.4px] whitespace-nowrap">
        <p className="leading-[33.6px]">ZIRCCLE</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Container46 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[4px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#591162] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#591162] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Features</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[92.3px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">How it works</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[85.61px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">Why Zirccle</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[44.98px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">About</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[29.3px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">FAQ</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#732c7b] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[25.6px]">Get first access</p>
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(252,249,248,0.7)] content-stretch flex h-[80px] items-center justify-between left-0 pl-[80px] pr-[79.99px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1280px]" data-name="Header / TopNavBar">
      <Container45 />
      <Nav />
      <Button1 />
    </div>
  );
}

export default function FeaturesZirccle() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start pt-[80px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 249, 248) 0%, rgb(252, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Features - Zirccle">
      <Main />
      <Footer />
      <HeaderTopNavBar />
    </div>
  );
}