import type { Metadata } from "next"
import Image from "next/image"
import { Bloom } from "@/components/views/bloom"
import { RevealOnScroll } from "@/components/views/home-client"
import { List, type Item } from "@/components/views/guide-list"
import * as ui from "@/components/views/home-ui"

export const metadata: Metadata = {
  title: "Help Guide",
  description: "Step-by-step help for using the Bleaum POS.",
}

// Copy is unchanged from the old page.
const tabs: { title: string; items: Item[]; img?: { src: string; alt: string; w: number; h: number } }[] = [
  {
    title: "Personal Details",
    items: [
      "Upload your profile picture.",
      "Edit your name and phone number.",
      "Upload additional documents you want attached to your profile.",
    ],
  },
  {
    title: "PIN Settings",
    img: { src: "/help/personalpin.jpg", alt: "Personal PIN settings", w: 1128, h: 357 },
    items: [
      "Set or change your PIN used for Clock In/Out and order processing.",
      { text: "How:", items: ["Enter your current password.", "Create or update your new PIN."] },
    ],
  },
  {
    title: "QR Code",
    img: { src: "/help/qrcode.jpg", alt: "QR Code", w: 1130, h: 498 },
    items: [
      "Generate a new QR code tied to your profile.",
      "Print your QR code if desired.",
      {
        text: "Uses of QR Code:",
        items: [
          "Quickly sign into the platform without typing your organization key, username, or password.",
          "Manager Approvals: Scan your QR code when a manager approval is needed.",
        ],
      },
    ],
  },
]

const how: Item[] = [
  "When processing an order, you will be asked to input your PIN.",
  "The order will be logged under the teammate who entered the PIN.",
  "Keeps orders and clocking accurate even when using the same device.",
]

const logout: Item[] = ["Click Logout to immediately sign out of the platform.", "You will be redirected to the login page."]

const shot = "h-auto w-full rounded-card border border-h-line shadow-[0_24px_48px_-28px_rgba(11,30,49,.5)]"

const card = `${ui.lift} h-full rounded-card border border-h-line bg-h-surface p-6 sm:p-8`

const callout = "max-w-[56ch] border-l-2 border-copper-400 pl-4 font-display text-[1.0625rem] font-medium leading-[1.5]"

// Decorative dropdown: an avatar with a name bar, then four menu rows. No text, so it adds no copy.
function Preview() {
  return (
    <div className="relative hidden h-[20rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-72 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
          <span className="size-10 shrink-0 rounded-full bg-copper-400/80" />
          <div className="flex-1">
            <div className="h-2.5 w-2/3 rounded-full bg-white/40" />
            <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="grid gap-2">
          {["w-1/2", "w-2/5", "w-3/5", "w-1/3"].map((w, i) => (
            <div key={w} className={`flex items-center gap-3 rounded-lg p-3 ${i === 0 ? "bg-white/[.12]" : "bg-white/[.05]"}`}>
              <span className={`size-4 shrink-0 rounded ${i === 0 ? "bg-copper-400" : "bg-white/25"}`} />
              <div className={`h-2 rounded-full bg-white/30 ${w}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function UserDropdownMenuPage() {
  return (
    <div data-page="user-dropdown-menu" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="udm-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="udm-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              User Dropdown Menu
            </h1>
            <p className="mt-5 max-w-[52ch] animate-rise text-[1.125rem] text-fog-200 [animation-delay:90ms]">
              When you click on your Username (top right of the screen), a dropdown menu will appear with the following
              options:
            </p>
          </div>
          <Preview />
        </div>
      </section>

      {/* Clock in / out */}
      <section id="user-dropdown-menu" className="py-pad" aria-labelledby="clock-h">
        <div id="clock-in-out" className={`${ui.wrap} grid scroll-mt-24 items-center gap-10 lg:grid-cols-[7fr_5fr]`}>
          <div {...ui.rv()}>
            <h2 id="clock-h" className={ui.h2}>Clock In / Clock Out</h2>
            <p className="mt-3 max-w-[56ch]">PIN-based clocking ensures secure and accurate time tracking.</p>
          </div>
          <div {...ui.rv(1, "lg:justify-self-center")}>
            <Image
              src="/help/clockin.jpg"
              alt="Clock In"
              width={208}
              height={282}
              sizes="13rem"
              className={`${shot} max-w-[13rem]`}
            />
          </div>
        </div>
      </section>

      {/* Profile */}
      <section id="profile-section" className="scroll-mt-24 bg-h-surface2 py-pad" aria-labelledby="profile-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[44rem]")}>
            <h2 id="profile-h" className={ui.h2}>Profile Section</h2>
          </div>
          <div {...ui.rv(0, "mx-auto mt-8 max-w-[44rem]")}>
            <Image
              src="/help/profilsection.jpg"
              alt="Profile Section"
              width={1350}
              height={481}
              sizes="(min-width: 768px) 44rem, 100vw"
              className={shot}
            />
          </div>
          <p {...ui.rv(0, "mt-10")}>Inside Profile, there are three tabs:</p>
          <ul className="mt-6 grid gap-4 lg:grid-cols-3 md:gap-6">
            {tabs.map((t, i) => (
              <li key={t.title} {...ui.rv(i)}>
                <div className={card}>
                  <h3 className={ui.h3}>{t.title}</h3>
                  {t.img && (
                    <Image
                      src={t.img.src}
                      alt={t.img.alt}
                      width={t.img.w}
                      height={t.img.h}
                      sizes="(min-width: 1024px) 24rem, 100vw"
                      className="mt-5 h-auto w-full rounded-ctl border border-h-line"
                    />
                  )}
                  <div className="text-[.9375rem]">
                    <List items={t.items} top />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Share mode */}
      <section id="share-mode" className="scroll-mt-24 py-pad" aria-labelledby="share-h">
        <div className={ui.wrap}>
          <div {...ui.rv(0, "max-w-[44rem]")}>
            <h2 id="share-h" className={ui.h2}>Turn on Share Mode</h2>
          </div>
          <div {...ui.rv(0, "mx-auto mt-8 max-w-[44rem]")}>
            <Image
              src="/help/turnonsharemode.jpg"
              alt="Turn on Share Mode"
              width={888}
              height={255}
              sizes="(min-width: 768px) 44rem, 100vw"
              className={shot}
            />
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
            <li {...ui.rv(0)}>
              <div className={card}>
                <h3 className={ui.h3}>Purpose:</h3>
                <p className="mt-4 border-t border-h-line pt-5 text-[.9375rem]">
                  If multiple teammates share the same tablet or computer, Share Mode allows smooth user transitions.
                </p>
              </div>
            </li>
            <li {...ui.rv(1)}>
              <div className={card}>
                <h3 className={ui.h3}>How it Works:</h3>
                <div className="text-[.9375rem]">
                  <List items={how} top />
                </div>
              </div>
            </li>
          </ul>
          <p {...ui.rv(0, `mt-8 ${callout}`)}>Perfect for busy retail environments or shift-based teams.</p>
        </div>
      </section>

      {/* Logout */}
      <section id="logout" className="scroll-mt-24 bg-h-surface2 py-pad" aria-labelledby="logout-h">
        <div className={`${ui.wrap} grid items-center gap-10 lg:grid-cols-[7fr_5fr]`}>
          <div {...ui.rv()}>
            <h2 id="logout-h" className={ui.h2}>Logout</h2>
            <div className="mt-2 max-w-[56ch]">
              <List items={logout} top />
            </div>
          </div>
          <div {...ui.rv(1, "lg:justify-self-center")}>
            <Image
              src="/help/logout.jpg"
              alt="Logout option in dropdown"
              width={198}
              height={232}
              sizes="13rem"
              className={`${shot} max-w-[12.375rem]`}
            />
          </div>
        </div>
      </section>

      {/* Quick summary */}
      <section className={`relative overflow-hidden py-pad text-white ${ui.ctaBg}`} aria-labelledby="sum-h">
        <Bloom cta />
        <div className={ui.wrap}>
          <div {...ui.rv(0, "relative max-w-[60ch]")}>
            <h2 id="sum-h" className={`${ui.heading} text-h2 font-normal`}>Quick Summary</h2>
            <p className="mt-3 text-[1.25rem] text-fog-200">
              The User Dropdown Menu empowers team members to securely clock in/out, manage their profile and PIN,
              quickly log in with QR codes, enable device sharing, and securely log out — all from one easy-to-access
              spot.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
