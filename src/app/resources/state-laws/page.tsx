"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  SearchIcon,
  FlagIcon,
  MapIcon,
  ArrowRightIcon,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  TrendingUp,
  Users,
  Shield,
  Globe,
  ChevronRight,
  Package,
  DollarSign,
  Truck,
  FileText,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';

// Type definitions for state and province
interface StateDetails {
  market: string;
  inventory: string;
  purchaseLimits: string;
  taxation: string;
  delivery: string;
  resources: string;
  updates?: string;
}

interface USState {
  state: string;
  code: string;
  status: string;
  details: StateDetails;
}

interface CAProvince {
  province: string;
  code: string;
  status: string;
  details: StateDetails;
}

interface ChartDatum {
  status: string;
  count: number;
}

const usStates: USState[] = [
  { 
    state: "Alabama", 
    code: "AL", 
    status: "Medical only",
    details: {
      market: "Medical only (limited to low-THC/high-CBD oil). No recreational sales.",
      inventory: "No state-mandated system (no retailers operating yet).",
      purchaseLimits: "Patients may possess only physician-authorized low-THC (≤0.3%) CBD oil.",
      taxation: "No retail sales tax (no adult-use market to tax).",
      delivery: "Illegal (no legal sales to deliver).",
      resources: "Alabama Medical Cannabis Commission (regulator).",
      updates: "Program launched in 2023 under the Howard Schoolcraft Act; first medical sales expected in late 2023."
    }
  },
  { 
    state: "Alaska", 
    code: "AK", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical and Adult-Use (legal since 2015).",
      inventory: "State uses Metrc for all licensed cannabis businesses.",
      purchaseLimits: "1 oz flower or 7g concentrate per customer per day (total <5,600mg THC).",
      taxation: "No state sales/excise tax on cannabis; Anchorage imposes a 5% local marijuana sales tax.",
      delivery: "Delivery permitted from licensed retailers (adult-use and medical) under municipal regulation (e.g. Anchorage) – license required.",
      resources: "Alaska Alcohol & Marijuana Control Office (regulator).",
      updates: "No major changes; adult cannabis sales have been steady since 2016."
    }
  },
  { 
    state: "Arizona", 
    code: "AZ", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2010) and Adult-Use (legalized 2020).",
      inventory: "No external vendor; ADHS requires self-reporting of sales (no RFID tracking).",
      purchaseLimits: "Recreational customers: 1 oz flower (28g) per day, or 5g concentrate. Medical patients: 2.5 oz per 14-day period.",
      taxation: "16% excise tax on recreational sales + 5.6% state Transaction Privilege Tax (sales tax); medical cannabis only pays sales tax (local 2–3% optional).",
      delivery: "Adult-use delivery allowed only by existing retail retailers with separate license (as of 2023).",
      resources: "AZ Dept. of Health Services (cannabis div.).",
      updates: "New licenses issued since 2022 for social equity; implementation of delivery rules in 2023 under OCM ordinances."
    }
  },
  { 
    state: "Arkansas", 
    code: "AR", 
    status: "Medical only",
    details: {
      market: "Medical only (no adult-use).",
      inventory: "Uses BioTrackTHC for medical tracking.",
      purchaseLimits: "Medical patients: 2.5 oz per 14 days.",
      taxation: "4.75% sales tax on medical cannabis (sales taxed as retail goods) plus any local tax.",
      delivery: "Delivery prohibited; patients must visit retailers.",
      resources: "Arkansas Department of Health (Medical Marijuana Division).",
      updates: "Program ongoing; some local bans on retailers; rising license application rounds in 2023."
    }
  },
  { 
    state: "California", 
    code: "CA", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical and Adult-Use (adult-use legalized 2016).",
      inventory: "State uses Metrc (via California Leaf Data Systems) for all cannabis businesses.",
      purchaseLimits: "Recreational: 28.5g flower, 8g concentrate per day. Medical: 8 oz dried or 6 mature plants per day (or doctor's recommendation).",
      taxation: "15% excise tax on retail sales + 7.25% state sales tax (plus local). Cultivation tax was eliminated in 2023; excise tax rising to 19% on July 1, 2025.",
      delivery: "Delivery is widespread (both adult-use and medical); numerous licensed delivery retailers. No special limit on deliveries beyond adult-use age 21 requirement.",
      resources: "California Bureau of Cannabis Control, and California Department of Tax and Fee Administration for tax guidelines.",
      updates: "In 2025, CA raised the cannabis excise tax (to 19%); continuous regulatory updates via BCC (e.g., packaging, licensing windows)."
    }
  },
  { 
    state: "Colorado", 
    code: "CO", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2000) and Adult-Use (since 2012).",
      inventory: "Uses Metrc (administered by state government).",
      purchaseLimits: "Recreational: 1 oz flower, 8g concentrate, or 800mg edible per day. Medical: 2 oz per 14 days for patients.",
      taxation: "15% excise tax (wholesale) + 15% retail excise tax + 2.9% state sales tax; local taxes may apply. (No general sales tax on marijuana products beyond excise).",
      delivery: "Delivery by licensed retailers is legal statewide (Regulation 1.36 allows delivery to any age-21 adult, including rural areas with no shops).",
      resources: "Colorado Marijuana Enforcement Division (MED).",
      updates: "Continued expansion of social equity licenses; high taxation (37% combined) remains a policy discussion."
    }
  },
  { 
    state: "Connecticut", 
    code: "CT", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical and Adult-Use (adult-use launched 2023).",
      inventory: "State uses BioTrackTHC for traceability.",
      purchaseLimits: "Recreational: 2 oz flower, 5g concentrate per day; Patients: up to 30-day supply (or doctor-specified amount).",
      taxation: "Potency-based excise: $0.00625/mg THC (flower), $0.008/mg (concentrates), $0.03/mg (edibles), plus 13% of sale price. State sales tax (6.35%) and local taxes apply on final sales.",
      delivery: "Adult-use delivery by licensed retailers began in 2023 (with a delivery-specific license). Medical home delivery also allowed statewide.",
      resources: "CT Department of Consumer Protection (Cannabis Control Commission) – official rules and licensing info.",
      updates: "First adult-use retailers opened in 2023; new licensing waves continue. Recent rules address potency limits and social equity."
    }
  },
  { 
    state: "Delaware", 
    code: "DE", 
    status: "Medical only",
    details: {
      market: "Medical only (no adult-use).",
      inventory: "Uses BioTrackTHC (Medical Marijuana Program).",
      purchaseLimits: "Medical patients: 3 mature plants plus state-defined product limits (generally 1 oz flower or 5g concentrate per 60 days for patients, varies by condition).",
      taxation: "15% excise tax on medical sales (as de facto price increase); no general sales tax.",
      delivery: "No delivery; patients visit retailers.",
      resources: "Delaware Dept. of Health (Medical Marijuana Program).",
      updates: "Legislature considering expanding plant limits and possibly personal cultivation."
    }
  },
  { 
    state: "Florida", 
    code: "FL", 
    status: "Medical only",
    details: {
      market: "Medical only (adult-use remains illegal as of 2025).",
      inventory: "Uses BioTrackTHC statewide for medical program.",
      purchaseLimits: "Medical patients: 2.5 oz per 14 days (soft caps; some flexibility).",
      taxation: "Medical cannabis is exempt from state sales tax.",
      delivery: "Home delivery of medical cannabis is allowed by licensed retailers under 2020 law.",
      resources: "Florida Dept. of Health (Office of Medical Marijuana Use).",
      updates: "As of 2025, Governor has not moved on recreational legalization; medical program expanding license numbers."
    }
  },
  { 
    state: "Georgia", 
    code: "GA", 
    status: "Medical limited",
    details: {
      market: "Medical limited to low-THC oil only. No adult-use.",
      inventory: "N/A (no state licensing beyond CBD oil producers).",
      purchaseLimits: "Patients: Oil up to 5% THC, 20 oz/month (plus minor allowances) per physician's order.",
      taxation: "Medical cannabis products are exempt from sales tax.",
      delivery: "Prohibited (no retailers exist).",
      resources: "Georgia Access to Medical Cannabis Commission (GAMCC).",
      updates: "Recent legislation (2021) legalized limited medical extract and expanded research; oral oil producers regulated."
    }
  },
  { 
    state: "Hawaii", 
    code: "HI", 
    status: "Medical only",
    details: {
      market: "Medical only (adult-use legalized by legislature effective 2026, regulated by new Adult-Use program).",
      inventory: "Uses BioTrackTHC (state's seed-to-sale system).",
      purchaseLimits: "Medical patients: 4 oz per 14-day period.",
      taxation: "4.5% excise tax on medical cannabis (as of Oct 2023, program launch) plus 4% general excise tax (acts like sales tax).",
      delivery: "Once adult-use launch, home delivery will be allowed statewide (per legalization bill). Medical delivery is not currently allowed.",
      resources: "Hawaii Department of Health (Medicinal Cannabis Program).",
      updates: "Adult-use cannabis became legal in 2023 (licenses expected 2026); first medical sales under the new DOH regulations began late 2023."
    }
  },
  { 
    state: "Idaho", 
    code: "ID", 
    status: "Prohibited",
    details: {
      market: "Prohibited. No medical or recreational cannabis (CBD oil <0.1% THC only).",
      inventory: "N/A.",
      purchaseLimits: "N/A (cannabis illegal).",
      taxation: "N/A.",
      delivery: "N/A.",
      resources: "Idaho's strict cannabis ban; no state program.",
      updates: ""
    }
  },
  { 
    state: "Illinois", 
    code: "IL", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2013) and Adult-Use (since 2020).",
      inventory: "Uses BioTrackTHC statewide.",
      purchaseLimits: "Recreational: 30g flower, 500mg THC concentrate per day (≥21). Medical: 2.5 oz per 14 days.",
      taxation: "Tiered excise: 10% for products ≤35% THC, 20% for 35–60% THC, 25% above 60% THC. Plus 6.25% state sales tax and local sales tax. (Medical sales have lower \"effective\" rate).",
      delivery: "Statewide delivery legal for both patient and adult-use customers via licensed retailers.",
      resources: "Illinois Department of Financial and Professional Regulation (Division of Cannabis Regulation).",
      updates: "First recreational sales in 2020; continuous licensing (including home grow licenses in 2023)."
    }
  },
  { 
    state: "Indiana", 
    code: "IN", 
    status: "Prohibited",
    details: {
      market: "Prohibited (limited CBD only).",
      inventory: "N/A.",
      purchaseLimits: "N/A.",
      taxation: "N/A.",
      delivery: "N/A.",
      resources: "No official cannabis program.",
      updates: ""
    }
  },
  { 
    state: "Iowa", 
    code: "IA", 
    status: "Medical limited",
    details: {
      market: "Medical (CBD-rich, low-THC) only.",
      inventory: "State-run custom tracking system (Iowa Traceability System).",
      purchaseLimits: "Patients may possess 4.5g THC per 90-day period.",
      taxation: "6% sales tax on medical cannabis.",
      delivery: "Delivery for medical is allowed via mail-order pharmacies (no retail stores).",
      resources: "Iowa Board of Pharmacy (Medical Cannabidiol Program).",
      updates: ""
    }
  },
  { 
    state: "Kansas", 
    code: "KS", 
    status: "CBD only",
    details: {
      market: "CBD only (hemp); both medical and recreational cannabis illegal.",
      inventory: "N/A.",
      purchaseLimits: "CBD hemp possession limited to 3 oz; cannabis illegal otherwise.",
      taxation: "N/A.",
      delivery: "N/A.",
      resources: "No cannabis legalization; hemp program via KS Dept. of Agriculture.",
      updates: ""
    }
  },
  { 
    state: "Kentucky", 
    code: "KY", 
    status: "Prohibited",
    details: {
      market: "Prohibited for medical or recreational (CBD-only law in 2017).",
      inventory: "N/A.",
      purchaseLimits: "N/A.",
      taxation: "N/A.",
      delivery: "N/A.",
      resources: "Kentucky's limited CBD hemp program (Dept. of Ag).",
      updates: ""
    }
  },
  { 
    state: "Louisiana", 
    code: "LA", 
    status: "Medical only",
    details: {
      market: "Medical only (CBD and low-THC oil). No adult-use.",
      inventory: "Uses BioTrackTHC for its medical cannabis tracking.",
      purchaseLimits: "Medical patients: up to 4.5g THC per 14 days (non-flower products).",
      taxation: "Medical cannabis is exempt from state sales tax.",
      delivery: "Delivery by licensed pharmacies permitted as of 2023 reforms.",
      resources: "Louisiana Board of Pharmacy (Dispensing of Low-THC Cannabis).",
      updates: "Expanded program in 2023 to legalize smokable flower and limit increases; new licensing in 2024."
    }
  },
  { 
    state: "Maine", 
    code: "ME", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 1999) and Adult-Use (since 2016).",
      inventory: "Uses Metrc (statewide) for both markets.",
      purchaseLimits: "Recreational: 2.5 oz flower, 7g concentrates, or 90mg edibles per day (adjusted from pre-2020 limits). Medical: 2.5 oz per 14 days.",
      taxation: "10% excise tax on all retail sales; 5.5% state sales tax + local tax.",
      delivery: "Adult-use and medical delivery allowed by retailers with license (MEP 2022 law) – no home cultivation allowed.",
      resources: "Maine Office of Cannabis Policy (regulator) – licensing info.",
      updates: "Adult-use open in 2018; social equity program in progress; first adult-use delivery licenses granted in 2024."
    }
  },
  { 
    state: "Maryland", 
    code: "MD", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2014) and Adult-Use (since 2023).",
      inventory: "Uses Metrc for all sales (medical and recreational).",
      purchaseLimits: "Recreational: 1.5 oz flower per 14 days (adults). Medical: 30-day supply (varies by product form).",
      taxation: "9% excise tax on retail sales. State and local sales tax (6%) apply to final price. Governor proposed raising excise to 15% post-launch.",
      delivery: "Recreational home delivery allowed statewide starting 2023 (with delivery licenses); medical delivery also permitted.",
      resources: "Maryland Cannabis Administration (Office of Cannabis Regulation).",
      updates: "Adult-use sales began July 1, 2023; regulatory changes ongoing (e.g. potency limits, license rounds)."
    }
  },
  { 
    state: "Massachusetts", 
    code: "MA", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2013) and Adult-Use (since 2016).",
      inventory: "Uses Metrc statewide.",
      purchaseLimits: "Recreational: 1 oz flower, 5g concentrate per day. Medical: 10 oz per 30 days.",
      taxation: "10.75% excise tax (5.75% state + 3% local + 2% local option) + 6.25% state sales tax.",
      delivery: "Adult-use and medical delivery legal (up to age 21) – license required (MA was early adopters, first adult-use delivery in 2018).",
      resources: "Massachusetts Cannabis Control Commission (CCC).",
      updates: "Social equity licensing continues; electronic permitting started in 2024; retail supply chain expansion."
    }
  },
  { 
    state: "Michigan", 
    code: "MI", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2008) and Adult-Use (since 2018).",
      inventory: "Uses Metrc for all licenses (transitioned from Metrc legacy in 2018).",
      purchaseLimits: "Recreational: 2.5 oz flower per day. Medical: 10-day supply (about 2.5 oz) per 14 days (no sale limits).",
      taxation: "10% excise tax at point-of-sale + 6% sales tax. Social equity recipients get reduced tax rate (3%).",
      delivery: "Recreational delivery allowed from licensed stores (age 21+), no extra license needed. Medical delivery allowed for patients with MMMP card (some home-deliver by provisioning centers).",
      resources: "Michigan Marijuana Regulatory Agency (MRA).",
      updates: "Recent focus on equity/homegrow; product shortages led to expanded licensing in 2024."
    }
  },
  { 
    state: "Minnesota", 
    code: "MN", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2014) and Adult-Use (since 2023).",
      inventory: "Uses Metrc (state-integrated) for all products.",
      purchaseLimits: "Recreational (adults): 2 oz dried cannabis or 16 oz edible or 72 oz liquid per 30 days; Medical: 3 oz per 14 days.",
      taxation: "10% excise tax on retailer gross receipts (plus 6.875% sales tax). Medical cannabis is exempt from sales tax.",
      delivery: "Adult-use delivery allowed statewide to adults 21+ (per 2023 law); medical home delivery allowed through pharmacies.",
      resources: "Minnesota Office of Cannabis Management (established 2023).",
      updates: "Adult-use program launched in 2025; licensing phases ongoing."
    }
  },
  { 
    state: "Mississippi", 
    code: "MS", 
    status: "Medical only",
    details: {
      market: "Medical only (since 2022, after referendum). No adult-use.",
      inventory: "Leaf Data Systems (state uses this for MMJ tracking).",
      purchaseLimits: "Medical: 3.5g per day (flower) or 0.4g concentrate per day.",
      taxation: "Medical cannabis exempt from state sales tax (state revenue via licensing fees).",
      delivery: "No; patients get products from pharmacies only.",
      resources: "Mississippi State Department of Health (Medical Cannabis Program).",
      updates: "First medical sales began April 2024; expanding number of medical retailers."
    }
  },
  { 
    state: "Missouri", 
    code: "MO", 
    status: "Medical only",
    details: {
      market: "Medical only (since 2018). Adult-use attempted (2022 amendment passed but blocked in courts).",
      inventory: "BioTrackTHC for tracking medical program.",
      purchaseLimits: "Medical: 4 oz flower per 30 days; concentrates and edibles 24 servings per 30 days.",
      taxation: "4% state sales tax on medical, plus local; licenses pay higher business taxes but patients are taxed at the counter.",
      delivery: "Medical delivery allowed from licensed retailers (no separate license required).",
      resources: "MO Department of Health (Medical Marijuana Program).",
      updates: "Cannabis legality in flux due to court challenge to Amendment 3 (2022)."
    }
  },
  { 
    state: "Montana", 
    code: "MT", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2004) and Adult-Use (since 2020).",
      inventory: "Uses Metrc for all sales.",
      purchaseLimits: "Recreational: 1 oz flower or 1 oz concentrate per day; Medical: 2 oz per 14 days.",
      taxation: "20% excise tax on recreational sales. Medical sales exempt from sales tax; adult-use also pays 4% state sales tax on top of excise.",
      delivery: "Adult-use delivery recently authorized statewide (license required, begun 2023).",
      resources: "Montana Department of Revenue (Marijuana Control Division) – licensing info.",
      updates: "First adult-use retailers opened in Jan 2022; tax collections strong; 2023 changes to labeling/Potency."
    }
  },
  { 
    state: "Nebraska", 
    code: "NE", 
    status: "CBD only",
    details: {
      market: "CBD only; cannabis illegal (medical initiative failed).",
      inventory: "N/A.",
      purchaseLimits: "N/A (illegal).",
      taxation: "N/A.",
      delivery: "N/A.",
      resources: "No legal cannabis sales.",
      updates: ""
    }
  },
  { 
    state: "Nevada", 
    code: "NV", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2000) and Adult-Use (since 2016).",
      inventory: "Switched from BioTrack to Metrc (contracted in 2017).",
      purchaseLimits: "Recreational: 1 oz flower, 3.5g concentrate per day. Medical: 2.5 oz per 2 weeks.",
      taxation: "15% excise tax on recreational sales plus 6.85% state sales tax (plus Clark County 2.6% and other local). Medical sales taxed at 2% (plus 2.6% local).",
      delivery: "Statewide delivery by licensed retailers (adult-use and medical) allowed since 2019.",
      resources: "Nevada Cannabis Compliance Board (state agency).",
      updates: "Marijuana tourism continues; licensing expanding out-of-state ownership caps."
    }
  },
  { 
    state: "New Hampshire", 
    code: "NH", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2013, effective 2016) and Adult-Use (legalized 2023 for recreational, license rollout pending).",
      inventory: "State building new system (likely custom) for adult-use; medical uses Metrc (implemented 2020).",
      purchaseLimits: "Medical: 2 oz per 30 days. Adult-use: details under rulemaking (15 plants homegrow, 3.5 oz possession once legal).",
      taxation: "10% cannabis surcharge planned on adult-use retail (to Education Trust Fund) plus 6.5% sales tax once implemented. Medical is taxed at 6.5% only.",
      delivery: "Law allows adult-use delivery statewide (upon licensing).",
      resources: "NH Department of Health and Human Services (medical), NH Office of Cannabis Policy (adult-use, forthcoming).",
      updates: "Recreational program establishing regulations in 2024-25; first sales expected late 2025."
    }
  },
  { 
    state: "New Jersey", 
    code: "NJ", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2010) and Adult-Use (since 2021).",
      inventory: "State uses Metrc for all cannabis businesses.",
      purchaseLimits: "Recreational: 1 oz flower per day; Medical: 3 oz per 30 days.",
      taxation: "$1.52/oz social equity excise fee (on all sales) + 6.625% state sales tax. Municipalities may add up to 2% local cannabis business tax.",
      delivery: "Licensed delivery companies may deliver adult-use cannabis to customers 21+ statewide (began 2023). Medical home delivery also allowed via retailers.",
      resources: "New Jersey Cannabis Regulatory Commission (NJCRC).",
      updates: "Adult-use sales began 2022; ongoing new license issuances; recent rule clarifications on homegrow (limited to medical cardholders only)."
    }
  },
  { 
    state: "New Mexico", 
    code: "NM", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2007) and Adult-Use (since 2021).",
      inventory: "Uses Metrc (state-mandated) for both programs.",
      purchaseLimits: "Recreational: 2 oz flower per day. Medical: 8 oz per 90 days.",
      taxation: "12% excise tax on retail sales + 5% state gross receipts tax. Medical sales not taxed.",
      delivery: "Adult-use delivery allowed statewide (via retailers); medical delivery also allowed.",
      resources: "New Mexico Regulation and Licensing Department (Cannabis Control Division).",
      updates: "Licensing continues under expediting rules; cannabinoid product limits under review (maximum 5,000mg edibles)."
    }
  },
  { 
    state: "New York", 
    code: "NY", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2014) and Adult-Use (legal since 2021, sales from 2022).",
      inventory: "Uses state system WETIMS (seed-to-sale system by OCM).",
      purchaseLimits: "Recreational: 3 oz flower per day. Medical: 60-day supply (typically 30 days standard).",
      taxation: "13% state excise tax (retail) + local 4% (state-run agency adds up to 4.875% in NYC, etc); also a THC-potency tax ($0.005/mg for flower, $0.008/mg concentrate, $0.03/mg edibles).",
      delivery: "Adult-use delivery legalized (licenses issued late 2023); medical home delivery was allowed starting 2022 statewide.",
      resources: "New York Office of Cannabis Management (OCM) – official website for regulations.",
      updates: "Progressive roll-out: retailers opened late 2022; equity/small business license rounds in 2024; litigation over social equity rules ongoing."
    }
  },
  { 
    state: "North Carolina", 
    code: "NC", 
    status: "Prohibited",
    details: {
      market: "Prohibited (CBD only for epilepsy; very limited medical hemp oils).",
      inventory: "N/A.",
      purchaseLimits: "N/A.",
      taxation: "N/A.",
      delivery: "N/A.",
      resources: "No recreational or general medical program.",
      updates: ""
    }
  },
  { 
    state: "North Dakota", 
    code: "ND", 
    status: "Medical only",
    details: {
      market: "Medical only (legal since 2016). Adult-use attempt (2020) failed.",
      inventory: "Uses Metrc (mandated from rollout) for medical tracking.",
      purchaseLimits: "Medical patients: 3 oz flower per 30 days (or 1 oz concentrate).",
      taxation: "No special excise; 5% state sales tax on medical (unless exempt).",
      delivery: "No delivery; patients visit retailers only.",
      resources: "ND Dept. of Health (Medical Marijuana Program).",
      updates: "Program steady; home grow banned by law; no expansions reported."
    }
  },
  { 
    state: "Ohio", 
    code: "OH", 
    status: "Medical only",
    details: {
      market: "Medical only (since 2016). Adult-use approved by voters in 2023, but implementation in progress.",
      inventory: "Uses Metrc (scheduled to be used for adult-use too).",
      purchaseLimits: "Medical patients: 90-day supply (no explicit limit; recommendations from doctor). Adult-use: 8% excise + 5.75% state sales tax expected.",
      taxation: "Medical: 5.75% sales tax; Adult-use: 10% excise + 5.75% sales tax (starting after sales launch).",
      delivery: "Adult-use home delivery allowed statewide (per 2023 initiative); Retail shop delivery of medical remains banned by DOH.",
      resources: "Ohio Department of Commerce (Medical Marijuana Control Program); new Office of Cannabis Management pending.",
      updates: "Recreational sales slated for late 2024 or 2025; rules still being drafted (as of 2025)."
    }
  },
  { 
    state: "Oklahoma", 
    code: "OK", 
    status: "Medical only",
    details: {
      market: "Medical only (since 2018, very broad medical program).",
      inventory: "Uses proprietary Seed-to-Sale (S2S) system (not Metrc, known as \"Myrc\").",
      purchaseLimits: "3 oz flower per 2 months (no edibles or concentrates limit) for patients. Very lax total possession limits (8 oz).",
      taxation: "2% excise on medical cannabis; local sales tax applies.",
      delivery: "Home delivery is allowed under medical licensing (no separate license needed).",
      resources: "OK Medical Marijuana Authority (OMMA).",
      updates: "One of largest medical markets; recent laws added processing and lab standards; no adult-use initiative has passed."
    }
  },
  { 
    state: "Oregon", 
    code: "OR", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 1998) and Adult-Use (since 2014).",
      inventory: "Uses Metrc statewide for all licensees (implemented 2017).",
      purchaseLimits: "Recreational: 1 oz flower per day (exemptions for home-grow). Medical: 8 oz per 10 days (patients).",
      taxation: "17% state excise tax at point of sale (added to price) plus 0–3% local tax. No general sales tax.",
      delivery: "Adult-use delivery (OLCC licensed) began 2018 (to any 21+ adult). Medical delivery by retailers allowed.",
      resources: "Oregon Liquor and Cannabis Commission (OLCC).",
      updates: "Market mature; license caps were removed, recent discussion on excise tax reduction due to oversupply."
    }
  },
  { 
    state: "Pennsylvania", 
    code: "PA", 
    status: "Medical only",
    details: {
      market: "Medical only (since 2016). Recreational illegal.",
      inventory: "Uses Metrc (implemented 2018 for medical).",
      purchaseLimits: "30-day supply (max 30-day order; no per-visit cap).",
      taxation: "Medical cannabis is exempt from state sales tax. Patients pay 1–4% local tax depending on county.",
      delivery: "Medical home delivery not allowed (except by disabled patients via certain retailers).",
      resources: "Pennsylvania Department of Health (Medical Marijuana Program).",
      updates: "2024 bill to expand retailers/home cultivation failed; program growing steadily."
    }
  },
  { 
    state: "Rhode Island", 
    code: "RI", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2006) and Adult-Use (since 2022).",
      inventory: "Uses Metrc (the state track-and-trace system) for all sales.",
      purchaseLimits: "Recreational: 1 oz flower, 5g concentrate per day. Medical: 10-day supply (roughly 2 oz) per 10 days.",
      taxation: "10% excise tax at point of sale (retail) + 7% state sales tax. Medical cannabis exempt from taxes.",
      delivery: "Adult-use delivery legalized in 2022 (licenses available to retailers); medical delivery also allowed.",
      resources: "RI Department of Business Regulation (Section of Cannabis Regulation).",
      updates: "First adult-use shops opened in 2023; ongoing social equity license rounds."
    }
  },
  { 
    state: "South Carolina", 
    code: "SC", 
    status: "CBD only",
    details: {
      market: "CBD and hemp only; all cannabis illegal.",
      inventory: "N/A.",
      purchaseLimits: "N/A.",
      taxation: "N/A.",
      delivery: "N/A.",
      resources: "No legal cannabis program.",
      updates: ""
    }
  },
  { 
    state: "South Dakota", 
    code: "SD", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2021) and Adult-Use (since 2020 initiative, but rollout complex).",
      inventory: "Medical uses Metrc. Adult-use system to be determined.",
      purchaseLimits: "Medical: 3 oz per 30 days. Adult-use: 1 oz per day (once active).",
      taxation: "15% state excise on adult-use sales; medical sales exempt from sales tax.",
      delivery: "Delivery not explicitly authorized under current law.",
      resources: "South Dakota Dept. of Health (medical), Legislature for adult-use rules.",
      updates: "Adult-use delayed by legislative actions; first retail shop sales expected 2025."
    }
  },
  { 
    state: "Tennessee", 
    code: "TN", 
    status: "CBD only",
    details: {
      market: "CBD only (limited medical oil), no general cannabis allowed.",
      inventory: "N/A.",
      purchaseLimits: "N/A.",
      taxation: "N/A.",
      delivery: "N/A.",
      resources: "No legal cannabis sales.",
      updates: ""
    }
  },
  { 
    state: "Texas", 
    code: "TX", 
    status: "Medical limited",
    details: {
      market: "Limited Medical (CBD-based \"Low-THC Cannabis\" since 2015), no adult-use.",
      inventory: "N/A (limited producers tracked through Department of Public Safety system).",
      purchaseLimits: "30 days' supply of approved oils (up to 1% THC by weight).",
      taxation: "Medical cannabis not taxed by state (virtually free from sales tax).",
      delivery: "Not permitted (retailers not authorized; patients get oil from specific pharmacies).",
      resources: "Texas Department of Public Safety (Health and Safety Code, also House Bill 1805).",
      updates: "Legislature loosening rules slightly (HB 1805 in 2023 allowed MMJ patient registry instead of prescription requirement)."
    }
  },
  { 
    state: "Utah", 
    code: "UT", 
    status: "Medical only",
    details: {
      market: "Medical only (since 2018). Adult-use illegal (2024 referendum failed).",
      inventory: "Uses Metrc for tracking medical cannabis.",
      purchaseLimits: "Medical: 7.5 oz flower per month or equivalent (varies by product).",
      taxation: "2.5% state sales tax + 1.75% excise tax on medical cannabis sales.",
      delivery: "Delivery prohibited; patients visit pharmacy-like retailers.",
      resources: "Utah Department of Agriculture & Food (Cannabis Control).",
      updates: "Continued growth of medical program; efforts to expand licensed pharmacies."
    }
  },
  { 
    state: "Vermont", 
    code: "VT", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 2004) and Adult-Use (since 2018). Adult-use sales launched 2022.",
      inventory: "Uses Metrc (implemented 2022 for adult-use, replacing MMJ legacy).",
      purchaseLimits: "Recreational: 1 oz flower per day; Medical: 2 oz per 30 days (state aggregation).",
      taxation: "6% excise tax on adult-use sales; no sales tax. Medical sales untaxed.",
      delivery: "Adult-use delivery allowed (existing retailers can deliver statewide). Medical delivery allowed for homebound patients.",
      resources: "Vermont Cannabis Control Board.",
      updates: "Transitioned older retailers to new licenses in 2022; continuous permitting of new retailers."
    }
  },
  { 
    state: "Virginia", 
    code: "VA", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Medical (since 1979) and Adult-Use (legal since 2021; first sales 2024).",
      inventory: "Uses Metrc (pilots in 2023, full launch with adult-use program).",
      purchaseLimits: "Adult-use: 1 oz flower per month; Medical: 30-day supply.",
      taxation: "21% state tax on adult-use (12.5% at wholesale, 8% at retail) plus local tax options. Medical sales untaxed except standard sales tax.",
      delivery: "Delivery authorized for medical patients; adult-use delivery is permitted by licensed stores.",
      resources: "Virginia Cannabis Control Authority (CCA).",
      updates: "First adult-use shops opened in 2024; several regulatory updates in 2025 (social equity funding, packaging rules)."
    }
  },
  { 
    state: "Washington", 
    code: "WA", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both Medical (since 1998) and Adult-Use (since 2012).",
      inventory: "Uses Fluence Metrc statewide.",
      purchaseLimits: "Recreational: 1 oz flower per day. Medical: 3 oz per 21 days.",
      taxation: "37% excise tax at retail (one of highest) + 6.5% state sales tax. All-inclusive.",
      delivery: "Limited: adults can preorder for pickup; home delivery only allowed via state-run \"Cannabis Stores\" pilot (Phased program in 2023).",
      resources: "Washington State Liquor and Cannabis Board (WSLCB).",
      updates: "High tax burden debated; Social equity programs expanded; Pushing for integrated online ordering (Cannabis Consumer Protection)."
    }
  },
  { 
    state: "District of Columbia", 
    code: "DC", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Medical (since 1998) and Adult-Use (since 2015, but federal land restrictions).",
      inventory: "Uses Metrc.",
      purchaseLimits: "Adults: 2 oz flower per 30 days. Medical: 3 oz per 30 days.",
      taxation: "No sales tax on cannabis (Congress prohibited DC tax on weed).",
      delivery: "Not allowed (federal prohibition on postal service limits home delivery).",
      resources: "D.C. Office of Medical Cannabis; Department of Consumer and Regulatory Affairs (DCRA) for licensing.",
      updates: "Municipal vs federal conflicts; new retailers opened 2023; home cultivation allowed (adult-use)."
    }
  },
  { 
    state: "West Virginia", 
    code: "WV", 
    status: "Medical only",
    details: {
      market: "Medical only (since 2017). No adult-use.",
      inventory: "Uses BioTrackTHC for medical program.",
      purchaseLimits: "Medical: 7-day supply (30 capsules, or 90 days liquid) for certain conditions.",
      taxation: "Medical cannabis exempt from tax except an 5% wholesale tax on manufacturers.",
      delivery: "Not permitted.",
      resources: "WV Department of Health and Human Resources (WV Healthy Lifestyles).",
      updates: "New patient cards increased; more retailers added over time."
    }
  },
  { 
    state: "Wisconsin", 
    code: "WI", 
    status: "CBD only",
    details: {
      market: "CBD only (low-THC medical oils since 2014); no broader legalization.",
      inventory: "N/A.",
      purchaseLimits: "Patients: 3g THC per 30 days (vertical + possible condition limits).",
      taxation: "Medical oils exempt from sales tax.",
      delivery: "Not permitted.",
      resources: "Wisconsin Senate Bill 527 (medical bill, no official program launched yet).",
      updates: ""
    }
  },
  { 
    state: "Wyoming", 
    code: "WY", 
    status: "CBD only",
    details: {
      market: "CBD only (hemp); all cannabis illegal.",
      inventory: "N/A.",
      purchaseLimits: "N/A.",
      taxation: "N/A.",
      delivery: "N/A.",
      resources: "No legal medical/recreational cannabis program.",
      updates: ""
    }
  },
]

const caProvinces: CAProvince[] = [
  { 
    province: "Alberta", 
    code: "AB", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Legal adult-use and medical (provincial retail system privatized).",
      inventory: "Provincial retail tracks via federal CTLS for producers; retailers track sales via POS (not Metrc).",
      purchaseLimits: "Follows federal limits (30g in public, home grow 4 plants).",
      taxation: "20% provincial sales tax on cannabis (reduced from 17% in 2023) plus 5% GST, plus federal excise.",
      delivery: "Licensed private retailers can offer home delivery (age 18+).",
      resources: "Alberta Gaming, Liquor & Cannabis (AGLC) – licensing and compliance.",
      updates: "Alberta loosened private retail licensing; expanded home delivery rules in 2023."
    }
  },
  { 
    province: "British Columbia", 
    code: "BC", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Both adult-use and medical (provincial retail via BC Cannabis Stores and private).",
      inventory: "BC uses provincial tracking (linked to CTLS) from licensed producers to retailers.",
      purchaseLimits: "30g public, 4 plants home.",
      taxation: "12% PST + 5% GST on cannabis (plus excise). Additional municipal tax possible.",
      delivery: "Provincial online store (BC Cannabis) delivers to residents; licensed private retailers may deliver (18+).",
      resources: "BC Liquor & Cannabis Regulation Branch.",
      updates: "BC lowered 1-year production limit to homegrow (4 plants) in 2023; new private stores continue to open."
    }
  },
  { 
    province: "Manitoba", 
    code: "MB", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (provincial retail via Manitoba Liquor & Lotteries – single wholesale supplier to private stores and online).",
      inventory: "Manitoba tracking through federal CTLS for producers; retailers submit to provincial system.",
      purchaseLimits: "30g, 4 plants.",
      taxation: "8% PST + 5% GST + federal excise.",
      delivery: "Province-run online store delivers to Manitoba (age 19+). No private delivery.",
      resources: "Liquor, Gaming and Cannabis Authority of Manitoba (LGCA).",
      updates: "January 2023 saw discontinuation of 12% PST (reduced to 8%); expanded list of licensed private stores."
    }
  },
  { 
    province: "New Brunswick", 
    code: "NB", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (Liquor Corp. runs retail stores plus licenced private retailers introduced).",
      inventory: "Uses federal CTLS at producer level; provincial tracking for distribution.",
      purchaseLimits: "30g, 4 plants.",
      taxation: "No provincial sales tax (HST 15% includes 10% federal + 5% provincial) plus excise.",
      delivery: "N.B. Liquor & Cannabis Corp. delivers online orders to consumers.",
      resources: "NB Liquor & Cannabis Commission.",
      updates: "2022–23 saw rollout of private retail licensing; increased access to stores."
    }
  },
  { 
    province: "Newfoundland & Labrador", 
    code: "NL", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (provincial government run stores plus private retailers).",
      inventory: "Provincial system linked to CTLS.",
      purchaseLimits: "30g, 4 plants.",
      taxation: "10% provincial tax + 5% GST (plus excise).",
      delivery: "Online sales with home delivery via Newfoundland and Labrador Liquor Corp (NLC).",
      resources: "Newfoundland Labrador Liquor Corporation (NLC).",
      updates: "Opened first standalone recreational stores in 2020; gradually adding more private retailers."
    }
  },
  { 
    province: "Northwest Territories", 
    code: "NT", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (government-run retail).",
      inventory: "Federal CTLS for producers; NWT tracks via territorial system.",
      purchaseLimits: "30g, 4 plants.",
      taxation: "6% territorial tax + 5% GST (plus excise).",
      delivery: "Online ordering with pickup only (no home delivery due to remote areas).",
      resources: "NWT Liquor & Cannabis Commission (NuTs'i Ts'eeda).",
      updates: "No private retailers; limited store network (only in Yellowknife and Hay River)."
    }
  },
  { 
    province: "Nova Scotia", 
    code: "NS", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (public-private hybrid – Nova Scotia Liquor Corp and private stores).",
      inventory: "Federal CTLS; provincial reporting system for retail sales.",
      purchaseLimits: "30g, 4 plants.",
      taxation: "10% provincial tax + 5% GST (plus excise).",
      delivery: "NSLC delivers online orders provincially (age 19+).",
      resources: "Nova Scotia Liquor Corporation (LCB).",
      updates: "Removed 30/30 cap on private stores in 2021 (unlimited private licenses); growing retail network."
    }
  },
  { 
    province: "Nunavut", 
    code: "NU", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (single government-run store in Iqaluit).",
      inventory: "Federal CTLS for producers; NU has no provincial system (direct orders).",
      purchaseLimits: "30g, 4 plants.",
      taxation: "5% GST only (no territorial sales tax) (plus excise).",
      delivery: "No delivery service; isolated community only has one store.",
      resources: "Department of Finance (Nunavut Liquor and Cannabis Commission).",
      updates: "Very limited access; discussions on expanding retail."
    }
  },
  { 
    province: "Ontario", 
    code: "ON", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (all private retail, province-run wholesale).",
      inventory: "Federal CTLS for producers; Ontario Cannabis Store (OCS) handles distribution (no separate provincial tracking beyond CTLS).",
      purchaseLimits: "30g, 4 plants.",
      taxation: "13% HST (5% GST + 8% PST) + federal excise.",
      delivery: "OCS website delivers to any Ontario adult (19+). Private stores also may offer delivery under municipal approvals.",
      resources: "Alcohol and Gaming Commission of Ontario (AGCO) – private retail licensing.",
      updates: "Rapid retail expansion after 2018; planned launch of online private delivery regulation."
    }
  },
  { 
    province: "Prince Edward Island", 
    code: "PE", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (public model with one provincial store in Charlottetown).",
      inventory: "Federal CTLS; no separate provincial tracking (central distribution by P.E.I. Cannabis Management Corporation).",
      purchaseLimits: "30g, 4 plants.",
      taxation: "15% HST (11% PST + 5% GST) + excise.",
      delivery: "Mail orders delivered by Canada Post (non-violent goods exception), local pickup in Charlottetown.",
      resources: "PEI Cannabis Management Corporation (established 2022).",
      updates: "Monopoly model maintained; new open adult-use store (2023)."
    }
  },
  { 
    province: "Quebec", 
    code: "QC", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (government-run by Société québécoise du cannabis, SQDC).",
      inventory: "Federal CTLS; SQDC supply managed through provincial system.",
      purchaseLimits: "30g, 4 plants (home-grow banned by provincial law).",
      taxation: "17% provincial tax + 5% GST (plus excise).",
      delivery: "SQDC website delivers to most of Quebec (some remote excluded).",
      resources: "Société québécoise du cannabis (SQDC) – retail.",
      updates: "Strict regulation (no promotions, strong packaging law, public advertising bans). No home grow; much lower usage than rest of Canada."
    }
  },
  { 
    province: "Saskatchewan", 
    code: "SK", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (public-private hybrid; SGI Liquor and Gaming runs wholesale to private stores).",
      inventory: "Federal CTLS for producers; provincial distribution.",
      purchaseLimits: "30g, 4 plants.",
      taxation: "6% PST + 5% GST + excise.",
      delivery: "Private retailers may deliver (18+).",
      resources: "Saskatchewan Liquor and Gaming Authority (LGA).",
      updates: "Started with 51 stores (2018); now ~80 private retail stores (2024)."
    }
  },
  { 
    province: "Yukon", 
    code: "YT", 
    status: "Both Medical and Adult-Use",
    details: {
      market: "Adult-use and medical (hybrid; government store in Whitehorse plus a few private retailers).",
      inventory: "Federal CTLS; provincial order to retailer system.",
      purchaseLimits: "30g, 4 plants.",
      taxation: "8% territorial tax + 5% GST (plus excise).",
      delivery: "No home delivery service.",
      resources: "Yukon Liquor Corporation.",
      updates: "Market small; 2023 saw government review of potency limits following concerns."
    }
  },
]

const statusColors: Record<string, string> = {
  "Both Medical and Adult-Use": "#10b981",
  "Medical only": "#3b82f6",
  "Medical limited": "#f59e0b",
  "CBD only": "#84cc16",
  Prohibited: "#ef4444",
}

const statusIcons: Record<string, React.ReactNode> = {
  "Both Medical and Adult-Use": <CheckCircle className="w-4 h-4" />,
  "Medical only": <Info className="w-4 h-4" />,
  "Medical limited": <AlertCircle className="w-4 h-4" />,
  "CBD only": <Info className="w-4 h-4" />,
  Prohibited: <XCircle className="w-4 h-4" />,
}

function getStatusChartData(states: { status: string }[]): ChartDatum[] {
  const counts: Record<string, number> = {}
  states.forEach((s) => {
    counts[s.status] = (counts[s.status] || 0) + 1
  })
  return Object.entries(counts).map(([status, count]) => ({ status, count }))
}

interface DetailItemProps {
  icon: React.ReactNode
  label: string
  content: string
}

function DetailItem({ icon, label, content }: DetailItemProps) {
  if (!content || content.trim() === "") return null
  
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 bg-white/10 rounded-lg">
          {icon}
        </div>
        <span className="font-semibold text-cyan-400 text-sm">{label}</span>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed pl-7">{content}</p>
    </div>
  )
}

export default function CannabisLawsPage(): React.JSX.Element {
  const [search, setSearch] = useState<string>("")
  const [modalData, setModalData] = useState<{
    type: 'state';
    data: USState;
  } | {
    type: 'province';
    data: CAProvince;
  } | null>(null)

  const filteredStates = usStates.filter(
    (s: USState) => s.state.toLowerCase().includes(search.toLowerCase()) || s.code.toLowerCase().includes(search.toLowerCase()),
  )
  const filteredProvinces = caProvinces.filter(
    (p: CAProvince) =>
      p.province.toLowerCase().includes(search.toLowerCase()) || p.code.toLowerCase().includes(search.toLowerCase()),
  )
  const chartData = getStatusChartData(usStates)

  return (
    <div className="min-h-screen bg-[#020917] relative overflow-hidden">
      {/* Modal for details */}
      <Dialog open={!!modalData} onOpenChange={(open) => !open && setModalData(null)}>
        <DialogContent className="max-w-xs sm:max-w-2xl w-full bg-white/95 dark:bg-[#101624]/95 border border-cyan-200/30 shadow-2xl backdrop-blur-xl p-4 sm:p-8 rounded-2xl sm:rounded-2xl mx-2 sm:mx-0 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between mb-2">
              <DialogTitle className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                {modalData?.type === 'state' ? modalData?.data?.state : modalData?.data?.province}
                <span className="inline-block bg-cyan-100/30 dark:bg-white/10 text-slate-700 dark:text-slate-300 rounded-lg sm:rounded-xl px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-base font-semibold ml-1 sm:ml-2">
                  {modalData?.type === 'state' ? modalData?.data?.code : modalData?.data?.code}
                </span>
              </DialogTitle>
              <DialogClose asChild>
                <button className="text-gray-400 hover:text-cyan-500 transition-colors p-1 sm:p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="sr-only">Close</span>
                </button>
              </DialogClose>
            </div>
          </DialogHeader>
          <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
            {modalData && (
              <>
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow" style={{ backgroundColor: statusColors[modalData.data.status], boxShadow: `0 0 6px ${statusColors[modalData.data.status]}40` }}></div>
                <span className="text-xs sm:text-base font-semibold text-slate-700 dark:text-slate-300">{modalData.data.status}</span>
              </>
            )}
          </div>
          <hr className="my-2 sm:my-4 border-cyan-100/30 dark:border-white/10" />
          {modalData && (
            <div className="space-y-3 sm:space-y-4">
              <DetailItem icon={<Package className="w-4 h-4 text-blue-400" />} label="Market & Inventory" content={`${modalData.data.details.market} ${modalData.data.details.inventory}`} />
              <DetailItem icon={<Info className="w-4 h-4 text-green-400" />} label="Purchase Limits" content={modalData.data.details.purchaseLimits} />
              <DetailItem icon={<DollarSign className="w-4 h-4 text-yellow-400" />} label="Taxation" content={modalData.data.details.taxation} />
              <DetailItem icon={<Truck className="w-4 h-4 text-purple-400" />} label="Delivery" content={modalData.data.details.delivery} />
              <DetailItem icon={<FileText className="w-4 h-4 text-orange-400" />} label="Resources" content={modalData.data.details.resources} />
              {modalData.data.details.updates && (
                <DetailItem icon={<TrendingUp className="w-4 h-4 text-cyan-400" />} label="Recent Updates" content={modalData.data.details.updates} />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-2000"></div>

      <div className="container mx-auto px-2 sm:px-4 py-10 sm:py-16 max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm text-white border border-blue-400/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Updated for 2024
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 text-white">Cannabis Laws and Compliance</h1>
          <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-300">US States & Canadian Provinces</h2>

          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Comprehensive, up-to-date cannabis law database with expert insights and compliance guidance
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-16">
            <Link href="/demo">
              <button className="group relative w-full sm:w-auto mx-auto bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl text-base sm:text-lg overflow-hidden mb-2 sm:mb-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Schedule Expert Consultation
                </span>
              </button>
            </Link>
            <Link href="/resources">
              <button className="group w-full sm:w-auto mx-auto bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-cyan-400/50 hover:bg-white/20 text-white font-semibold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl transition-all duration-300 text-base sm:text-lg mb-2 sm:mb-0">
                <span className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Browse Resources
                </span>
              </button>
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm text-slate-400">Jurisdictions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-slate-400">Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-slate-400">Compliance</div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="flex flex-row gap-6 items-center justify-center mx-auto mb-20 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-cyan-700/30 scrollbar-track-transparent">
          {chartData.map((item: ChartDatum, index: number) => (
            <div
              key={item.status}
              className="group relative min-w-[180px] max-w-[200px] w-full h-40 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 flex-shrink-0 flex flex-col justify-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`p-2 rounded-xl shadow-lg`}
                    style={{
                      backgroundColor: `${statusColors[item.status]}20`,
                      color: statusColors[item.status],
                      boxShadow: `0 0 10px ${statusColors[item.status]}30`,
                    }}
                  >
                    {statusIcons[item.status]}
                  </div>
                  <TrendingUp className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.count}
                </div>
                <p className="text-xs text-slate-300 font-medium leading-tight">{item.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Chart Section */}
        <div className="mb-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl shadow-lg">
              <BarChart className="w-7 h-7 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Legal Status Distribution</h3>
              <p className="text-slate-300 text-base">Real-time breakdown of cannabis laws across US states</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20, top: 20, bottom: 20 }}>
                <XAxis type="number" hide />
                <YAxis
                  dataKey="status"
                  type="category"
                  width={140}
                  tick={{ fill: "#e2e8f0", fontWeight: 600, fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: "16px",
                    color: "white",
                    backdropFilter: "blur(10px)",
                  }}
                />
                <Bar dataKey="count" radius={[0, 12, 12, 0]}>
                  {chartData.map((entry) => (
                    <Cell key={entry.status} fill={statusColors[entry.status]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Enhanced Search Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">Find Your Jurisdiction</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Instantly access detailed compliance information for any US state or Canadian province
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search by state, province, or code..."
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                className="w-full pr-14 pl-5 sm:px-10 py-4 sm:py-8 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-400/50 text-white placeholder-slate-400 shadow-2xl text-base sm:text-xl font-medium"
              />
              <div className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <SearchIcon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced United States Section with Expandable Details */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-3 sm:p-5 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl sm:rounded-3xl shadow-lg">
              <FlagIcon className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-5xl font-bold text-white mb-1 sm:mb-2">United States</h2>
              <p className="text-slate-300 text-base sm:text-xl flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                {filteredStates.length} states and territories
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {filteredStates.map((state: USState, index: number) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setModalData({ type: 'state', data: state })}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-4 sm:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-6">
                    <div>
                      <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {state.state}
                      </h4>
                      <span className="inline-block bg-white/10 text-slate-300 rounded-lg sm:rounded-xl px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold backdrop-blur-sm">
                        {state.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div
                        className="p-2 sm:p-3 rounded-xl shadow-lg"
                        style={{
                          backgroundColor: `${statusColors[state.status]}20`,
                          color: statusColors[state.status],
                          boxShadow: `0 0 10px ${statusColors[state.status]}30`,
                        }}
                      >
                        {statusIcons[state.status]}
                      </div>
                      <div className="p-1 sm:p-2 bg-white/10 rounded-lg sm:rounded-xl">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <div
                      className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg"
                      style={{
                        backgroundColor: statusColors[state.status],
                        boxShadow: `0 0 8px ${statusColors[state.status]}50`,
                      }}
                    ></div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-300">{state.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Canada Section with Expandable Details */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-3 sm:p-5 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl sm:rounded-3xl shadow-lg">
              <MapIcon className="w-8 h-8 sm:w-12 sm:h-12 text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-5xl font-bold text-white mb-1 sm:mb-2">Canada</h2>
              <p className="text-slate-300 text-base sm:text-xl flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                {filteredProvinces.length} provinces and territories
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {filteredProvinces.map((province: CAProvince, index: number) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setModalData({ type: 'province', data: province })}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-4 sm:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-6">
                    <div>
                      <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-red-400 transition-colors duration-300">
                        {province.province}
                      </h4>
                      <span className="inline-block bg-white/10 text-slate-300 rounded-lg sm:rounded-xl px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold backdrop-blur-sm">
                        {province.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div
                        className="p-2 sm:p-3 rounded-xl shadow-lg"
                        style={{
                          backgroundColor: `${statusColors[province.status]}20`,
                          color: statusColors[province.status],
                          boxShadow: `0 0 10px ${statusColors[province.status]}30`,
                        }}
                      >
                        {statusIcons[province.status]}
                      </div>
                      <div className="p-1 sm:p-2 bg-white/10 rounded-lg sm:rounded-xl">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <div
                      className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg"
                      style={{
                        backgroundColor: statusColors[province.status],
                        boxShadow: `0 0 8px ${statusColors[province.status]}50`,
                      }}
                    ></div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-300">{province.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action Section */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-4 sm:p-6 shadow-xl max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4">
              <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg">
                <ArrowRightIcon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Ready to Ensure Compliance?</h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-white/90 max-w-3xl leading-relaxed font-light">
              Don&apos;t navigate the complex world of cannabis regulations alone. Our expert team provides
              <span className="font-semibold text-cyan-200"> personalized guidance</span> to keep your business
              compliant and competitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/demo">
                <button className="group relative w-full sm:w-auto mx-auto bg-white hover:bg-slate-100 text-blue-600 font-bold px-5 sm:px-7 py-3 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl text-base sm:text-lg font-bold overflow-hidden mb-2 sm:mb-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Get Expert Consultation
                  </span>
                </button>
              </Link>
              <Link href="/resources/sops">
                <button className="group w-full sm:w-auto mx-auto bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 hover:border-white/50 text-white font-bold px-5 sm:px-7 py-3 rounded-2xl transition-all duration-300 text-base sm:text-lg font-bold">
                  <span className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Download Compliance Guides
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}