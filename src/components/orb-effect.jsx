import { cn } from "../lib/utils";

export default function OrbEffect({ className }) {
  return (
    <div className={cn("relative w-full pt-12", className)}>
      <div className="relative w-full pt-[20%]">
        {/* Main Orb Container */}
        <div
          className="absolute -left-[50%] top-0 z-10 w-[200%] overflow-hidden 
          rounded-[100%] border-4 bg-background/20 pt-[100%]"
          style={{
            borderColor: "#663473cc",
            boxShadow:
              "0px 0px 12px rgba(102,52,115,0.4), 0px 0px 64px rgba(102,52,115,0.3), 0px 0px 12px rgba(102,52,115,0.3) inset",
          }}
        >
          {/* Animated Layers */}
          <div
            className="absolute -left-[50%] top-0 h-[200%] w-[200%] 
            animate-pulse-hover rounded-[100%]"
            style={{
              backgroundColor: "rgba(102,52,115,0.2)",
              maskImage:
                "radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)",
            }}
          />
          <div
            className="absolute -left-[50%] top-0 h-[200%] w-[200%] 
            animate-pulse-hover rounded-[100%]"
            style={{
              backgroundColor: "rgba(102,52,115,0.15)",
              maskImage:
                "radial-gradient(140% 110%, transparent 0%, transparent 35%, black 55%)",
            }}
          />
          <div
            className="absolute -left-[50%] -top-[5%] h-[200%] w-[200%] 
            animate-pulse-hover rounded-[100%]"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(134,84,147,0.4), rgba(102,52,115,0.4), rgba(82,42,92,0.4))",
              maskImage:
                "radial-gradient(140% 120%, transparent 0%, transparent 38%, black 43%)",
            }}
          />
        </div>

        {/* Gradient Effects */}
        <div className="absolute w-full top-[50%]">
          <div
            className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 
            scale-[2.5] rounded-[50%] -translate-y-1/2 sm:h-[512px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(102,52,115,0.3) 10%, rgba(102,52,115,0) 60%)",
            }}
          />
          <div
            className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 
            scale-[2] rounded-[50%] -translate-y-1/2 sm:h-[256px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(134,84,147,0.25) 10%, rgba(102,52,115,0) 60%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
