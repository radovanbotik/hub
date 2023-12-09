import ExclusiveHeader from "@/components/dashboard/ExclusiveHeader";
import ExclusiveSlider from "@/components/dashboard/ExclusiveSlider";
import StoriesSlider from "@/components/dashboard/StoriesSlider";
import Story from "@/components/dashboard/Story";

export default function Home() {
  return (
    <div className="container py-8 px-4 md:h-full h-auto dark:bg-slate-800 w-full  mx-auto grid grid-cols-12 gap-y-6 grid-rows-2 md:gap-10 md:grid-rows-1">
      {/* EXCLUSIVES */}
      <div className="h-full w-full col-span-12 md:col-span-4  xl:col-span-3  flex flex-col justify-between">
        <div className="p-4 space-y-8 md:space-y-12 flex flex-col">
          <ExclusiveHeader />
          <ExclusiveHeader />
          <ExclusiveHeader />
        </div>
        <div className=" p-4">
          <ExclusiveSlider />
        </div>
      </div>
      {/* CENTER SQUARE */}
      <div className="h-full w-full  col-span-12 md:col-span-8  xl:col-span-6 group">
        <div className="h-full w-full  relative overflow-hidden group-hover:scale-95 transition-transform">
          <div className="absolute h-full w-full inset-0 bg-red-800"></div>
          <img
            src="https://media.licdn.com/dms/image/C4D1BAQGGdNo6IlDOCQ/company-background_10000/0/1583275772247?e=2147483647&v=beta&t=ew3hpSAiCXTa43sck6sdYbo3gn09VJaKiFTsizSa0HU"
            alt=""
            className="w-full h-full absolute inset-0 object-cover blur-sm contrast-150 mix-blend-darken"
          />
          {/* dark:bg-slate-50  bg-black */}
          <a
            href="international/day_pass"
            className="p-4 flex relative items-end w-full h-full justify-end  dark:text-black text-slate-50 "
          >
            <h3 className="capitalize text-3xl font-bold  block">international day pass</h3>
          </a>
        </div>
      </div>
      {/* STORIES */}
      <div className="xl:col-span-3   hidden xl:flex  flex-col-reverse justify-between">
        <div className="p-4 flex flex-col h-full divide-y divide-gray-700">
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
        <div className=" p-4">
          <StoriesSlider />
        </div>
      </div>
    </div>
  );
}
