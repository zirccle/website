import svgPaths from "./svg-5m68qajhyk";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#591162] text-[64px] tracking-[-1.28px] w-full">
        <p className="leading-[70.4px]">Get in touch</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[18px] whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">{`We're here to help simplify your style journey. Reach`}</p>
        <p className="leading-[28.8px] mb-0">out with any questions, partnership inquiries, or</p>
        <p className="leading-[28.8px]">feedback.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[15.295px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #591162)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e5e1e7] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">SUPPORT</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#591162] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">hello@zirccle.com</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[136.59px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background />
        <Container4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #591162)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e5e1e7] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">HQ</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#591162] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">New York City, NY</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[127.97px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background1 />
        <Container9 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(211,194,207,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container2 />
      <Container7 />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start relative row-1 self-start shrink-0 w-[500px]" data-name="Contact Info">
      <Container />
      <HorizontalBorder />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">Your name</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#fcf9f8] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[11.59px] pt-[10px] px-[13px] relative size-full">
          <Container13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3c2cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1b1b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">Name</p>
      </div>
      <Input />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">your@email.com</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#fcf9f8] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[11.59px] pt-[10px] px-[13px] relative size-full">
          <Container15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3c2cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1b1b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">Email</p>
      </div>
      <Input1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.59px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[25.6px]">How can we help you?</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#fcf9f8] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-auto size-full">
        <div className="content-stretch flex items-start justify-center pb-[111.38px] pt-[8px] px-[13px] relative size-full">
          <Container17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3c2cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[8.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1b1b] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">Message</p>
      </div>
      <Textarea />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#732c7b] content-stretch drop-shadow-[0px_4px_10px_rgba(115,44,123,0.05)] flex items-center justify-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[28.8px]">Send Message</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <Container12 />
      <Container14 />
      <Container16 />
      <Button />
    </div>
  );
}

function ContactForm() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_4px_10px_rgba(115,44,123,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Contact Form">
      <div className="content-stretch flex flex-col items-start pb-[48px] pt-[32px] px-[32px] relative size-full">
        <Form />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="gap-x-[120px] gap-y-[120px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_479.95px] relative shrink-0 w-[1120px]" data-name="Main Content">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#591162] text-[24px] tracking-[2.4px] whitespace-nowrap">
          <p className="leading-[33.6px]">ZIRCCLE</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[324.83px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
          <p className="leading-[25.6px]">© 2024 Zirccle. Your style journey, simplified.</p>
        </div>
      </div>
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
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[24px] top-[-1px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Privacy</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="relative self-stretch shrink-0 w-[76.69px]" data-name="Link:margin">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[24px] top-[-1px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f434e] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Terms</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="relative self-stretch shrink-0 w-[69.36px]" data-name="Link:margin">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[24px] top-[-1px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#591162] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Contact</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="relative self-stretch shrink-0 w-[87.02px]" data-name="Link:margin">
      <Link3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[25.59px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Link />
        <LinkMargin />
        <LinkMargin1 />
        <LinkMargin2 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#fcf9f8] max-w-[1280px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#d3c2cf] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pb-[32px] pl-[80px] pr-[80.01px] pt-[33px] relative size-full">
          <Container18 />
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#591162] text-[24px] tracking-[2.4px] whitespace-nowrap">
        <p className="leading-[33.6px]">ZIRCCLE</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[65.17px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">Features</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[116.3px]" data-name="Link:margin">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">How it works</p>
      </div>
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[109.61px]" data-name="Link:margin">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">Why Zirccle</p>
      </div>
    </div>
  );
}

function LinkMargin5() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[68.98px]" data-name="Link:margin">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">About</p>
      </div>
    </div>
  );
}

function LinkMargin6() {
  return (
    <div className="h-[25.59px] relative shrink-0 w-[53.3px]" data-name="Link:margin">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[#4f434e] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[25.6px]">FAQ</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link4 />
      <LinkMargin3 />
      <LinkMargin4 />
      <LinkMargin5 />
      <LinkMargin6 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#732c7b] content-stretch drop-shadow-[0px_4px_10px_rgba(115,44,123,0.05)] flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[25.6px]">Get first access</p>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,249,248,0.7)] content-stretch flex h-[80px] items-center justify-between left-0 pl-[80px] pr-[79.99px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1280px]" data-name="TopNavBar">
      <Container21 />
      <Container22 />
      <Button1 />
    </div>
  );
}

export default function ContactZirccle() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center pb-[19.46px] pt-[200px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 249, 248) 0%, rgb(252, 249, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Contact - Zirccle">
      <MainContent />
      <Footer />
      <TopNavBar />
    </div>
  );
}