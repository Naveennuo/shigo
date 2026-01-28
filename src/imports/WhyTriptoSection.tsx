import svgPaths from "./svg-gr1fih5njt";

function DollarCircle() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="dollar-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="dollar-circle">
          <path d={svgPaths.p363d7c00} fill="var(--fill-0, #0066CC)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#e8effc] content-stretch flex items-center justify-center p-[8px] relative rounded-[24px] shrink-0 size-[100px]" data-name="Icon">
      <DollarCircle />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] relative shrink-0 text-[#383e48] text-center w-full" data-name="Title">
      <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[32px]">No hidden fees</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[24px]">Transparent pricing with no hidden fees.</p>
      </div>
    </div>
  );
}

function NoFee() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[264px]" data-name="No Fee">
      <Icon />
      <Title />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="shield-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="shield-check">
          <path d={svgPaths.p28287100} fill="var(--fill-0, #0066CC)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#e8effc] content-stretch flex items-center justify-center p-[8px] relative rounded-[24px] shrink-0 size-[100px]" data-name="Icon">
      <ShieldCheck />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] relative shrink-0 text-[#383e48] text-center w-full" data-name="Title">
      <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[32px]">Instant booking</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[24px]">Get confirmation right after you reserve.</p>
      </div>
    </div>
  );
}

function InstantBooking() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[264px]" data-name="Instant booking">
      <Icon1 />
      <Title1 />
    </div>
  );
}

function FileListEdit() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="file-list-edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="file-list-edit">
          <path d={svgPaths.p3e8efd00} fill="var(--fill-0, #0066CC)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#e8effc] content-stretch flex items-center justify-center p-[8px] relative rounded-[24px] shrink-0 size-[100px]" data-name="Icon">
      <FileListEdit />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] relative shrink-0 text-[#383e48] text-center w-full" data-name="Title">
      <div className="css-g0mm18 flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[32px]">Flexibility</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[24px]">Flexible options with free cancellation on many listings.</p>
      </div>
    </div>
  );
}

function Flexibility() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[264px]" data-name="Flexibility">
      <Icon2 />
      <Title2 />
    </div>
  );
}

function TitlesIcon() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[1232px]" data-name="Titles + Icon">
      <NoFee />
      <InstantBooking />
      <Flexibility />
    </div>
  );
}

function FullFrame() {
  return (
    <div className="content-stretch flex gap-[150px] h-[224px] items-start justify-center px-[201px] relative shrink-0 w-[1232px]" data-name="Full Frame">
      <div className="h-[83.264px] relative shrink-0 w-[339.805px]">
        <div className="absolute inset-[-0.6%_-0.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345.139 84.2642">
            <path d={svgPaths.p1f294e70} fill="var(--stroke-0, #669CFF)" id="Vector 5" />
          </svg>
        </div>
      </div>
      <div className="h-[83.264px] relative shrink-0 w-[339.805px]">
        <div className="absolute inset-[-0.6%_-0.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345.139 84.2642">
            <path d={svgPaths.p1f294e70} fill="var(--stroke-0, #669CFF)" id="Vector 5" />
          </svg>
        </div>
      </div>
      <TitlesIcon />
    </div>
  );
}

export default function WhyTriptoSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative size-full" data-name="WhyTripto Section">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#121316] text-[36px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[46px]">Why Travellers Trust ShiGO</p>
      </div>
      <FullFrame />
    </div>
  );
}