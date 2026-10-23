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

// Help Guide copy and data, carried over unchanged from the old page.
// Changes: "Metrc" is now "state tracking and reporting integrations" (website-updates/all-pages.md row 3),
// and the "➔" bullets in front of sub-section titles are dropped, since cards now show that level.
// Wording that the files in `rebrand resources/website-updates/` set must change there first.
type Img = { src: string; alt: string; w: number; h: number }
type Row = { cells: string[]; list?: Item[] }
type Block =
  | { p: string }
  | { note: string }
  | { h: string }
  | { list: Item[] }
  | { img: Img }
  | { table: { cols: string[]; rows: Row[] } }
type Group = { id?: string; title: string; sub?: boolean; blocks: Block[] }
type Section = { id: string; title?: string; intro?: Block[]; groups: Group[]; summary?: string }

const img = (name: string, alt: string, w: number, h: number): Block => ({ img: { src: `/help/${name}.jpg`, alt, w, h } })

const sections: Section[] = [
  {
    id: "pos-help-guide",
    groups: [
      {
        id: "side-settings",
        title: "Side Settings Panel (Spinning Gear Icon)",
        blocks: [
          { p: "The Side Settings panel has three main tabs:" },
          { list: ["Queue", "Activity", "Personalize"] },
          { note: "Each tab helps you manage the flow of your shop, your customers, and your POS experience." },
        ],
      },
      {
        id: "queue-tab",
        title: "Queue Tab",
        blocks: [
          { p: "Manage customers entering your shop with three main actions:" },
          img("addtoqueue", "Add to Queue", 1356, 243),
        ],
      },
      {
        id: "add-customer",
        title: "Add Customer",
        blocks: [
          { p: "Upload customer medical ID or driver's license manually, scan ID, or upload images." },
          img("addcustomer", "Add Customer", 991, 568),
        ],
      },
      {
        id: "customer-queue",
        title: "Customer Queue",
        blocks: [
          { p: "Manage customers entering your shop with three main actions:" },
          img("customerqueue", "Customer Queue", 976, 578),
        ],
      },
      {
        id: "activity-tab",
        title: "Activity Tab",
        blocks: [
          { p: "Track every action happening in your shop." },
          {
            table: {
              cols: ["What It Shows", "Details"],
              rows: [
                { cells: ["Activity Type", "Description of the action taken (e.g., Customer Added, Product Edited)."] },
                { cells: ["Date and Time", "Precise time of each action."] },
              ],
            },
          },
          { note: "Every change, addition, deletion, and update in the system is logged for transparency and accountability." },
        ],
      },
      {
        id: "personalize-tab",
        title: "Personalize Tab",
        blocks: [
          { p: "Customize your POS interface to suit your style and workflow:" },
          { h: "Appearance Settings" },
          {
            list: [
              "Light or Dark Mode: Choose your preferred theme.",
              "Color Options: In Light Mode, select different color themes for accents.",
              "Navigation Style: Adjust navigation layout according to preference.",
              "Layout Options: Fit different screen sizes and devices.",
            ],
          },
          { h: "Queue Settings" },
          {
            list: [
              {
                text: "Yellow Border Timer:",
                items: ["Set a time (in minutes) after which a customer rectangle turns yellow in the queue — warning wait time."],
              },
              {
                text: "Red Border Timer:",
                items: ["Set a time (in minutes) after which a customer rectangle turns red — critical wait time."],
              },
            ],
          },
          { p: "This helps your team quickly identify customers who have been waiting too long." },
          { h: "Default POS Screen" },
          {
            list: [
              {
                text: "Choose your default view:",
                items: [
                  "Tablet Mode: Optimized for compact touchscreen devices.",
                  "Computer Mode: Full-size POS view for desktops or large screens.",
                ],
              },
              "Switch at any time using the top right corner button on the POS screen.",
            ],
          },
          { h: "Default Print Type" },
          {
            list: [
              {
                text: "Choose how you print:",
                items: ["Browser Print: Print directly from the browser.", "Hardware Print: Use a specified printer device."],
              },
            ],
          },
          img("appearancesetting", "Appearance Settings", 551, 592),
        ],
      },
    ],
    summary:
      "The Side Settings Panel gives you powerful tools to manage customer flow, track shop activity, and personalize the POS experience for smooth daily operations.",
  },
  {
    id: "user-dropdown-menu",
    title: "User Dropdown Menu",
    intro: [
      { p: "When you click on your Username (top right of the screen), a dropdown menu will appear with the following options:" },
    ],
    groups: [
      {
        id: "clock-in-out",
        title: "Clock In / Clock Out",
        blocks: [{ p: "PIN-based clocking ensures secure and accurate time tracking." }, img("clockin", "Clock In", 208, 282)],
      },
      {
        id: "profile-section",
        title: "Profile Section",
        blocks: [
          img("profilsection", "Profile Section", 1350, 481),
          { p: "Inside Profile, there are three tabs:" },
          { h: "Personal Details" },
          {
            list: [
              "Upload your profile picture.",
              "Edit your name and phone number.",
              "Upload additional documents you want attached to your profile.",
            ],
          },
          { h: "PIN Settings" },
          img("personalpin", "Personal PIN settings", 1128, 357),
          {
            list: [
              "Set or change your PIN used for Clock In/Out and order processing.",
              { text: "How:", items: ["Enter your current password.", "Create or update your new PIN."] },
            ],
          },
          { h: "QR Code" },
          img("qrcode", "QR Code", 1130, 498),
          {
            list: [
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
        ],
      },
      {
        id: "share-mode",
        title: "Turn on Share Mode",
        blocks: [
          img("turnonsharemode", "Turn on Share Mode", 888, 255),
          { h: "Purpose:" },
          { p: "If multiple teammates share the same tablet or computer, Share Mode allows smooth user transitions." },
          { h: "How it Works:" },
          {
            list: [
              "When processing an order, you will be asked to input your PIN.",
              "The order will be logged under the teammate who entered the PIN.",
              "Keeps orders and clocking accurate even when using the same device.",
            ],
          },
          { note: "Perfect for busy retail environments or shift-based teams." },
        ],
      },
      {
        id: "logout",
        title: "Logout",
        blocks: [
          img("logout", "Logout option in dropdown", 198, 232),
          { list: ["Click Logout to immediately sign out of the platform.", "You will be redirected to the login page."] },
        ],
      },
    ],
    summary:
      "The User Dropdown Menu empowers team members to securely clock in/out, manage their profile and PIN, quickly log in with QR codes, enable device sharing, and securely log out — all from one easy-to-access spot.",
  },
  {
    id: "action-icons",
    title: "Action Icons",
    intro: [
      img("bolt", "Lightning bolt, bell, and chat icons", 235, 172),
      { p: "Directly below the user's name, you'll see three action icons. Each one gives quick access to important real-time tools." },
    ],
    groups: [
      {
        id: "lightning-bolt",
        title: "Lightning Bolt Icon — Activity Center",
        blocks: [
          { p: "Purpose: View and track all actions taken across the system." },
          {
            list: [
              "Click the Lightning Bolt to open the Main Activity Page.",
              {
                text: "Features:",
                items: [
                  "View every action recorded in the system (customer check-ins, edits, sales, updates, etc.).",
                  { text: "Filter by Date:", items: ["All actions", "Today", "Yesterday", "Custom Date Range"] },
                  "Filter by Activity Type for more detailed searches (e.g., Product Edited, Order Completed).",
                ],
              },
            ],
          },
          { note: "Helps you quickly monitor what's happening across the platform at any time." },
        ],
      },
      {
        id: "bell-icon",
        title: "Bell Icon — Notifications",
        blocks: [
          { p: "Purpose: See real-time alerts for incoming activities." },
          {
            list: [
              {
                text: "Click the Bell to view:",
                items: [
                  "New orders coming into the system.",
                  "Requests (such as order updates, manager approvals, or inventory alerts).",
                ],
              },
            ],
          },
          { note: "Never miss a customer request, order, or important system update." },
        ],
      },
      {
        id: "chat-icon",
        title: "Chat Icon — Messaging Center",
        blocks: [
          { p: "Purpose: Communicate instantly with Customers and Teammates." },
          {
            list: [
              "Click the Chat Bubble icon to access chat functions.",
              {
                text: "Inside the chat center:",
                items: [
                  { text: "Customer Tab:", items: ["Send and receive messages directly with customers."] },
                  { text: "Teammate Tab:", items: ["Internal messaging with team members."] },
                ],
              },
            ],
          },
          { note: "Streamlines communication inside the store — faster responses, better teamwork." },
        ],
      },
    ],
    summary:
      "The Lightning Bolt, Bell, and Chat icons give you instant access to activity history, new notifications, and direct messaging — all designed to keep you connected, informed, and efficient throughout the day.",
  },
  {
    id: "dashboard-overview",
    title: "Dashboard Overview",
    intro: [
      { p: "The Dashboard gives you a full snapshot of store performance, tasks, sales, and system activity — all in one interactive place." },
    ],
    groups: [
      {
        id: "top-section",
        title: "Top Section: Welcome & Quick Overview",
        blocks: [
          img("dashboard", "Dashboard top section with welcome message and summaries", 1363, 524),
          {
            list: [
              "Welcome Message: A quick greeting with user personalization.",
              "Due Tasks Summary: View any pending tasks directly on login.",
              "New Orders Summary: Instantly see if new orders have been placed.",
            ],
          },
        ],
      },
      {
        id: "interactive-graphs",
        title: "Middle Section: Interactive Graphs",
        blocks: [
          img("dashboardmidsection", "Dashboard middle section with charts and quick links", 1349, 479),
          {
            table: {
              cols: ["Chart", "Purpose", "Key Features"],
              rows: [
                {
                  cells: [
                    "Top Products / Categories / Brands",
                    "Visualizes top-selling products, categories, or brands.",
                    "Dropdown to switch view. Select different timelines for broader or narrower insights.",
                  ],
                },
                {
                  cells: [
                    "Conversion Chart",
                    "Tracks customer flow: how many were added to the queue vs. how many completed a purchase.",
                    "Dropdown to switch between timelines (Past 7, 14, 30 days, 3 months, 6 months).",
                  ],
                },
                {
                  cells: [
                    "Popular Times",
                    "Shows busiest times based on historical order data.",
                    "Hover over bars to see exact numbers. Great for staffing and scheduling insights.",
                  ],
                },
                {
                  cells: [
                    "Total Revenue Chart",
                    "Displays total revenue performance over time.",
                    "Dropdown to adjust timeline (similar to Conversion Chart).",
                  ],
                },
              ],
            },
          },
          { note: "All charts are interactive. Hover over points to see detailed data." },
        ],
      },
      {
        id: "quick-links",
        title: "Middle Section: Key Quick Links",
        blocks: [
          { p: "Below the charts, you'll find six quick links:" },
          { list: ["Products", "Tasks", "Employees", "Orders", "Customers", "Deals"] },
          { note: "Clicking any link takes you directly to that section for deeper management." },
        ],
      },
      {
        id: "shortcuts",
        title: "Shortcuts Section",
        blocks: [
          {
            table: {
              cols: ["Shortcut", "Function"],
              rows: [
                { cells: ["Customer Queue", "Quickly jump to view and manage the customer queue."] },
                {
                  cells: [
                    "Task List",
                    "Add new tasks, track pending/completed tasks, view priority, assigned user, creation and due dates.",
                  ],
                },
                {
                  cells: [
                    "Registers",
                    'View and manage registers. Toggle status ON/OFF. Under "Action", see associated drawers, open/close a drawer, create deposits or withdrawals.',
                  ],
                },
                {
                  cells: [
                    "State Reporting Alerts",
                    'Monitor all sales, transfer, and communication issues with state tracking and reporting integrations. Each event has a "+" button to expand and view detailed information, including links to resolve the issue.',
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "recent-activities",
    title: "Right Sidebar: Recent Activities",
    intro: [
      {
        list: [
          "A real-time feed showing the most recent actions taken across the system.",
          "Quickly review activities like new customers added, orders processed, updates made, and more.",
        ],
      },
    ],
    groups: [],
    summary:
      "The Dashboard brings together customer flow, product performance, staff tasks, order management, and compliance alerts — helping you run the store smarter, faster, and more effectively, all from one centralized screen.",
  },
  {
    id: "fulfillment",
    title: "Fulfillment Section",
    intro: [
      { p: "The Fulfillment area in the sidebar contains four powerful tools for managing your in-store and online operations:" },
      { list: ["POS (Point of Sale)", "Order Ahead", "Orders", "Returns"] },
    ],
    groups: [
      {
        title: "1. POS (Point of Sale)",
        blocks: [
          img("processorder", "POS tabs", 629, 315),
          { p: "The POS page has four tabs to manage all customer orders and transactions:" },
          {
            table: {
              cols: ["Tab", "Function"],
              rows: [
                { cells: ["Process Order", "Create new orders (In-Store, Pickup, Delivery)."] },
                {
                  cells: [
                    "Orders",
                    "View order history sorted by the most recent created date. Click any Order Number to open a side panel showing order details and a Print Receipt button.",
                  ],
                },
                { cells: ["Returns", "Manage returns using the same layout and features as the Orders tab."] },
                {
                  cells: [
                    "Uploads",
                    "Store important customer documents like tax exemption forms, driver's licenses, images, and medical IDs.",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        title: "Add Customers",
        sub: true,
        blocks: [
          img("addcustomer1", "Select Customer and Add buttons", 756, 320),
          img("addcustomer2", "Add Customer modal", 948, 513),
          {
            list: [
              'Add Button ("Add"): Create a new customer profile from scratch.',
              { text: "Customer Search Dropdown: Search customers by:", items: ["First Name", "Last Name", "Email", "Phone Number"] },
              "Anonymous Order Option: Place an order without linking to a customer — ideal for recreational or non-medical sales.",
            ],
          },
        ],
      },
      {
        title: "Line Items Section (Product Selection)",
        sub: true,
        blocks: [
          img("scanandmanage", "Scan Receipt Barcode and Manage Cart Items buttons", 1363, 416),
          { p: "Two Ways to Add Products:" },
          { list: ["Scan the Product Barcode, or", 'Click "Manage Cart Items" to browse the full catalog.'] },
          { h: "Inside Manage Cart Items:" },
          {
            list: [
              { text: "Search by:", items: ["Product Name", "Category", "Brand"] },
              {
                text: "Tools Available:",
                items: [
                  "Filters (High-to-Low, Low-to-High, Alphabetical Order)",
                  "Star Icon: Quickly view Top 25 Products",
                  "Clear Filters button",
                ],
              },
            ],
          },
          { h: "Product Info Displayed:" },
          {
            list: [
              "Stock availability",
              "THC/CBD percentages",
              "Product Matrix Alert: Products that are matrices have a red badge on the image — clicking opens package selection.",
            ],
          },
        ],
      },
      {
        title: "Customer Profile Side Panel",
        sub: true,
        blocks: [
          { p: "On the right-hand side while managing products:" },
          {
            list: [
              {
                text: "Customer Data:",
                items: [
                  "Name, Customer Type, Customer Groups",
                  "Top 3 Purchased Items",
                  "Top 3 Categories",
                  "Top 3 Brands (All linkable)",
                ],
              },
            ],
          },
          { p: "At the bottom of this panel:" },
          { list: ["Product Data (Quantity and Remove button for items added to cart)"] },
        ],
      },
      {
        title: "Order Summary & Checkout",
        sub: true,
        blocks: [
          img("ordersummaryandcheckout", "Order Summary and Checkout", 598, 466),
          { h: "Top Summary Actions:" },
          {
            list: [
              "Miscellaneous Charge: Add any extra charge.",
              "Miscellaneous Discount: Apply additional discounts.",
              "Notes: Add special customer order notes.",
              "Custom Date/Time: Backdate or future-date an order manually.",
            ],
          },
          { h: "Cart Details:" },
          { list: ["Items added + Deals applied", "Subtotal breakdown"] },
          { h: "Loyalty, Coupons, Store Credit:" },
          {
            list: [
              "Loyalty Points: Enter $ amount, click Apply.",
              "Available Coupons: Select coupon and Apply.",
              "Store Credit: Enter amount, click Apply.",
            ],
          },
          { h: "Tips Section:" },
          { list: ["Pre-configured percentages (e.g., 10%, 15%, 20%) or Custom Tip entry."] },
          { h: "Payment Method Section:" },
          { list: ["Choose payment method, input Amount Received, calculate Change, and select Change Method."] },
        ],
      },
      {
        title: "Bottom POS Actions:",
        sub: true,
        blocks: [
          {
            table: {
              cols: ["Button", "Function"],
              rows: [
                { cells: ["Processing", "Sends the order to Order Ahead for packing."] },
                { cells: ["Save as Draft", "Saves the order to be completed later."] },
                { cells: ["Clear Cart", "Clears all items in the cart."] },
                {
                  cells: ["Checkout", "Complete the order and choose to:"],
                  list: ["Print Receipt", "Start New Order", "Email Receipt"],
                },
              ],
            },
          },
        ],
      },
      {
        title: "Quick Links at the Top of POS Page:",
        sub: true,
        blocks: [
          {
            list: [
              "Scan Receipt: Pull up past orders quickly.",
              "Add to Queue: Add a customer directly to the queue.",
              "Open Queue: View the active customer queue.",
              {
                text: "Switch to Tablet Mode:",
                items: [
                  {
                    text: "Tablet Mode arranges quick-access rectangular buttons:",
                    items: [
                      "Select Customer",
                      "Select Products",
                      "Select Order Type",
                      "Select Register",
                      "Select Drawer",
                      "Select Customer Group",
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "2. Order Ahead",
        blocks: [
          { p: "Manage E-commerce and Prepackaged Orders in progress." },
          { h: "Drag and Drop Orders Across Stages:" },
          { list: ["New → Processing → Packaged → Ready"] },
          { note: "Smoothly track and move online and queued orders through the fulfillment process." },
        ],
      },
      {
        title: "3. Orders",
        blocks: [
          { p: "A standalone page to view and manage all completed or active Orders." },
          { list: ["Same data layout and functionality as the Orders tab inside POS."] },
        ],
      },
      {
        title: "4. Returns",
        blocks: [
          { p: "Manage and process Returns directly." },
          { list: ["Matches the layout and options as the Returns tab inside POS.", "Search, view, and manage return history easily."] },
        ],
      },
    ],
    summary:
      "The Fulfillment Module provides everything you need to create, process, manage, and complete orders — whether they're in-store, pickup, delivery, or e-commerce — in one organized, fast-moving workflow.",
  },
  {
    id: "customer-management",
    title: "Customer Management Section",
    intro: [
      { p: "The Customer Management module is divided into three main subsections:" },
      { list: ["Customers", "Customer Groups", "Rewards and Types"] },
    ],
    groups: [
      { title: "1. Customers", blocks: [{ p: "Manage your entire customer base easily and efficiently." }] },
      {
        title: "Customer Table",
        sub: true,
        blocks: [
          {
            list: [
              "Displays all customers in alphabetical order.",
              { text: "Search Functionality:", items: ["Search by First Name, Last Name, Phone Number, or Email."] },
              {
                text: "Top Buttons:",
                items: [
                  "Upload Driver's License: Upload a customer's ID and search for them directly.",
                  "Scan ID: Scan a customer's ID to auto-populate information.",
                  "Add Customer: Manually create a new customer profile from scratch.",
                ],
              },
            ],
          },
          { h: "Table Columns:" },
          {
            table: {
              cols: ["Column", "Details"],
              rows: [
                { cells: ["First Name", "Customer's first name."] },
                { cells: ["Last Name", "Customer's last name."] },
                { cells: ["Email", "Customer's email address."] },
                { cells: ["DOB", "Customer's date of birth."] },
                { cells: ["Action", "Quick access icons for managing customers."] },
              ],
            },
          },
        ],
      },
      {
        title: "Action Column Functions:",
        sub: true,
        blocks: [
          {
            list: [
              {
                text: "First Icon (POS Shortcut):",
                items: ["Click to immediately take that customer into the POS screen to start a transaction."],
              },
              { text: "Edit Icon:", items: ["Edit customer information.", "View customer active/inactive status."] },
              {
                text: "Name Click (Side Panel Opens):",
                items: [
                  "Customer Details",
                  "Medical Info",
                  "Driver's License Info",
                  "Store Credits",
                  "Loyalty Points",
                  "Top Products Purchased",
                  "Order History",
                  "Return History",
                ],
              },
            ],
          },
          { note: "Everything you need to know about a customer, accessible from one panel." },
        ],
      },
      {
        title: "2. Customer Groups",
        blocks: [{ p: "Organize customers into specific groups for operational and compliance purposes." }],
      },
      {
        title: "Default System Groups:",
        sub: true,
        blocks: [{ list: ["Medical Customers", "Recreational Customers"] }],
      },
      {
        title: "Group Management:",
        sub: true,
        blocks: [
          { p: "Each group appears in a table with an Action column." },
          { h: "Settings Icon:" },
          {
            list: [
              "Click Open, then Settings to configure the group.",
              {
                text: "Options Available:",
                items: [
                  { text: "Minimum Age Verification:", items: ["Set minimum age requirements for each group."] },
                  {
                    text: "Purchase Limit Profiles:",
                    items: ["Set purchase limits per product category based on state regulations (e.g., flower, concentrates, edibles)."],
                  },
                ],
              },
            ],
          },
          { note: "Perfect for staying compliant with state laws and customizing customer experiences." },
        ],
      },
      {
        title: "3. Rewards and Types",
        blocks: [{ p: "Create Customer Types for loyalty rewards, special discounts, and promotions." }],
      },
      {
        title: "Examples of Customer Types:",
        sub: true,
        blocks: [{ list: ["Veterans", "Owners", "Employee Discounts", "Special Promotions"] }],
      },
      {
        title: "Rewards Table:",
        sub: true,
        blocks: [
          { p: "Each type appears in a table with an Action column." },
          { h: "Settings Icon:" },
          {
            list: [
              "Click to configure reward settings.",
              {
                text: "Options Available:",
                items: [
                  { text: "Tax Exemption:", items: ["Mark the group as tax-exempt if eligible."] },
                  {
                    text: "Discount Settings:",
                    items: ["Set a fixed Dollar Discount or a Percentage Discount applied to every order for that group."],
                  },
                ],
              },
            ],
          },
          { note: "Encourages loyalty and maximizes customer satisfaction with automatic perks!" },
        ],
      },
    ],
    summary:
      "The Customer Management section gives you powerful tools to maintain customer profiles, organize them into functional groups, and reward them intelligently — all while keeping operations compliant and customer-focused.",
  },
  {
    id: "promotions",
    title: "Promotions Section",
    intro: [
      { p: "The Promotions module is divided into three subsections:" },
      { list: ["Coupons", "Deals", "Loyalty Reward Settings"] },
    ],
    groups: [
      { title: "1. Coupons", blocks: [{ p: "Manage special discount offers that customers can redeem at checkout." }] },
      {
        title: "Coupon Table View",
        sub: true,
        blocks: [
          {
            table: {
              cols: ["Column", "Details"],
              rows: [
                { cells: ["Name", ""] },
                { cells: ["Coupon Code", ""] },
                { cells: ["Description", ""] },
                { cells: ["Created At (Date Created)", ""] },
                {
                  cells: ["Usage", "Clicking opens a Side Panel showing:"],
                  list: ["Who redeemed the coupon", "Time of redemption", "Associated Order Number"],
                },
                { cells: ["Action (Edit existing coupon to reflect new changes)", ""] },
              ],
            },
          },
        ],
      },
      {
        title: "Create a New Coupon",
        sub: true,
        blocks: [
          {
            list: [
              "Click Add Coupon (top right).",
              {
                text: "Fill out the following fields:",
                items: [
                  "Coupon Name",
                  "Coupon Code",
                  "Description",
                  "Discount Rate (Dollar amount or percentage)",
                  "Customer Types: Select types like Veteran, Owner, or custom types.",
                  "Customer Groups: Choose from Recreational, Medical, or any custom group.",
                  "Sales Sources: Internal, External, or Both.",
                  "Delivery Methods: POS, In-Store, Pickup.",
                  {
                    text: "Stacking Policy:",
                    items: ["Define if the coupon can stack with Loyalty Rewards, Deals, or Both."],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Validity and Expiration Configuration",
        sub: true,
        blocks: [
          {
            list: [
              "Start Date: Choose when the coupon becomes active.",
              "No Expiration or set Specific Start/End Dates.",
              {
                text: "Day & Time Controls:",
                items: ["Example: Activate only on Mondays and Tuesdays, 5-7 PM (for a Happy Hour deal)."],
              },
              { text: "Multi-Store Support:", items: ["Different days, times, and dates per location."] },
            ],
          },
        ],
      },
      {
        title: "Notification Settings",
        sub: true,
        blocks: [
          {
            list: [
              {
                text: "Send Notification:",
                items: ["Upload Image, Input Title and Description.", "System sends out notification automatically when deal activates."],
              },
            ],
          },
        ],
      },
      {
        title: "Rules Section",
        sub: true,
        blocks: [
          {
            list: [
              "Minimum Order Value: Customer must spend at least $X to redeem.",
              "Total Usage Limit: Max number of total redemptions before automatic expiration.",
              "Limit Uses Per Customer: Max redemptions per individual user.",
              "Maximum Applicable Discount: Cap the deal amount.",
            ],
          },
        ],
      },
      {
        title: "Coupon Image",
        sub: true,
        blocks: [{ list: ["Upload a visual thumbnail that will appear in the Mobile App and Website listings."] }],
      },
      {
        title: "2. Deals",
        blocks: [{ p: "Deals are almost identical to Coupons — with a few powerful additions:" }],
      },
      {
        title: "Deal Table View",
        sub: true,
        blocks: [
          {
            list: [{ text: "Same table structure as Coupons:", items: ["Name, Description, Code, Usage, Action."] }],
          },
        ],
      },
      {
        title: "Deal Types:",
        sub: true,
        blocks: [
          {
            table: {
              cols: ["Type", "Description"],
              rows: [
                { cells: ["Regular Deal", "Standard percentage or dollar-off deals, same as coupons."] },
                {
                  cells: [
                    "BOGO Deal",
                    'Build "Buy One, Get One" promotions: choose specific products or categories and set exceptions for product/package eligibility.',
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        title: "Create a New Deal",
        sub: true,
        blocks: [
          {
            list: [
              {
                text: "Follow similar steps as Coupons:",
                items: [
                  "Add Deal Name, Code, Description, Discount Rate.",
                  "Set Validity Dates, Days, Times.",
                  "Configure Notification Settings.",
                  "Define Sales Source, Delivery Method, and Stacking Policy.",
                  "Add Rules for Minimum Spend, Usage Limits, Customer Restrictions.",
                  "Upload Deal Image for customer-facing promotions.",
                ],
              },
            ],
          },
          { note: "Deals allow more complex promotional structures beyond simple discounts." },
        ],
      },
      {
        title: "3. Loyalty Reward Settings",
        blocks: [{ p: "Customize how your loyalty program works." }],
      },
      {
        title: "Points-to-Price Ratio",
        sub: true,
        blocks: [
          { list: ["Define how points convert into dollars.", "Example: 20 points = $1."] },
          { p: "This ratio will drive how all loyalty calculations are made across orders." },
        ],
      },
      {
        title: "Registration Loyalty",
        sub: true,
        blocks: [{ list: ["On/Off Toggle.", "Reward customers with bonus points upon account creation."] }],
      },
      {
        title: "First Order Loyalty",
        sub: true,
        blocks: [{ list: ["On/Off Toggle.", "Reward customers again after they place their first order."] }],
      },
      {
        title: "Reward Policy",
        sub: true,
        blocks: [
          { p: "Two approaches to awarding loyalty points:" },
          {
            table: {
              cols: ["Method", "Description"],
              rows: [
                {
                  cells: [
                    "Tiered Rewards",
                    "Customers earn points based on basket spend thresholds (e.g., Spend $100, earn 500 points, Spend $200, earn 2000 points and spend $300, earn 5000 points).",
                  ],
                },
                {
                  cells: [
                    "Per-Spending Rewards",
                    "Customers earn X points for every $1 spent (e.g., Spend $1, get 1 point worth $0.05).",
                  ],
                },
              ],
            },
          },
          { note: "Choose between rewarding heavier baskets or rewarding every dollar spent." },
        ],
      },
      {
        title: "Loyalty Restrictions",
        sub: true,
        blocks: [
          {
            list: [
              {
                text: "Limit how customers redeem loyalty points by:",
                items: ["Points Limit", "Dollar Limit", "Percentage of Order Limit"],
              },
            ],
          },
          { note: "Prevents over-redeeming and protects margins." },
        ],
      },
      {
        title: "General Settings",
        sub: true,
        blocks: [
          {
            list: [
              {
                text: "Stacking Policy:",
                items: ["Define whether loyalty can stack with Coupons, Deals, or Both."],
              },
              {
                text: "Require Customer Contact:",
                items: ["Toggle if a customer must provide an Email or Phone Number to participate in Loyalty."],
              },
            ],
          },
          { note: "Control participation and stacking rules for better program management." },
        ],
      },
    ],
    summary:
      "The Promotions module empowers you to offer strategic discounts, build creative deals, reward loyalty smartly, and manage promotional campaigns — all while maintaining total flexibility on how, when, and who gets rewarded.",
  },
]


const callout = "max-w-[56ch] border-l-2 border-copper-400 pl-4 font-display text-[1.0625rem] font-medium leading-[1.5]"

// Hero chips jump to the titled sections; the first section is the page itself.
const jump = sections.filter((s) => s.title)

// Decorative contents list: a numbered dot and a title bar per entry. No text, so it adds no copy.
function Preview() {
  return (
    <div className="relative hidden h-[20rem] lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 w-80 animate-rise rounded-2xl border-2 border-white/25 bg-navy-950 p-4 shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] [animation-delay:200ms]">
        <div className="grid gap-3">
          {["w-3/4", "w-2/3", "w-4/5", "w-1/2", "w-2/3"].map((w, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-white/[.06] p-3">
              <span className={`size-6 shrink-0 rounded-full ${i === 0 ? "bg-copper-400" : "bg-white/20"}`} />
              <div className={`h-2 rounded-full bg-white/35 ${w}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="grid gap-4 text-[.9375rem]">
      {blocks.map((b, i) => {
        if ("p" in b) return <p key={i}>{b.p}</p>
        if ("note" in b) return <p key={i} className={callout}>{b.note}</p>
        if ("h" in b) return <h4 key={i} className="mt-2 font-display font-medium text-h-accent">{b.h}</h4>
        if ("list" in b) return <List key={i} items={b.list} plain />
        if ("img" in b)
          return (
            <Image
              key={i}
              src={b.img.src}
              alt={b.img.alt}
              width={b.img.w}
              height={b.img.h}
              sizes="(min-width: 960px) 52rem, 100vw"
              style={{ maxWidth: b.img.w }}
              className="h-auto w-full rounded-ctl border border-h-line"
            />
          )
        return (
          <div key={i} className="overflow-x-auto rounded-ctl border border-h-line">
            <table className="w-full min-w-[26rem] border-collapse text-left">
              <thead>
                <tr className="bg-h-surface2">
                  {b.table.cols.map((c) => (
                    <th key={c} scope="col" className={`${ui.label} px-4 py-3 sm:px-5`}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.table.rows.map((r) => (
                  <tr key={r.cells[0]} className="border-t border-h-line align-top">
                    <th scope="row" className="px-4 py-4 font-semibold text-h-accent sm:px-5">{r.cells[0]}</th>
                    {r.cells.slice(1).map((c, j, rest) => (
                      <td key={j} className="px-4 py-4 text-h-muted sm:px-5">
                        {c}
                        {r.list && j === rest.length - 1 && (
                          <div className="mt-2">
                            <List items={r.list} plain />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}

function Card({ g }: { g: Group }) {
  return (
    <li id={g.id} {...ui.rv(0, `scroll-mt-24 ${g.sub ? "lg:ml-10" : ""}`)}>
      <div
        className={`rounded-card border border-h-line bg-h-surface p-6 sm:p-8 ${g.sub ? "border-l-2 border-l-copper-400" : ""}`}
      >
        <h3 className={g.sub ? "font-display text-[1.125rem] font-medium leading-[1.15]" : ui.h3}>{g.title}</h3>
        <div className="mt-4">
          <Blocks blocks={g.blocks} />
        </div>
      </div>
    </li>
  )
}

export default function HelpGuidePage() {
  return (
    <div data-page="help-guide" className={ui.root}>
      <RevealOnScroll />

      {/* Hero */}
      <section className={`relative overflow-hidden text-white ${ui.heroBg}`} aria-labelledby="hg-h">
        <Bloom />
        <div className={`${ui.wrap} relative grid items-center gap-10 py-hero lg:grid-cols-[7fr_5fr]`}>
          <div>
            <h1 id="hg-h" className={`${ui.h1} max-w-[16ch] animate-rise`}>
              POS Help Guide
            </h1>
            <ul className="mt-8 flex animate-rise flex-wrap gap-2 [animation-delay:90ms]">
              {jump.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex min-h-11 items-center rounded-full px-4 text-[.9375rem] font-medium text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.3)] transition-shadow duration-200 hover:shadow-[inset_0_0_0_1.5px_#fff]"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Preview />
        </div>
      </section>

      {/* Sections */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 py-pad ${i % 2 ? "bg-h-surface2" : ""}`}
          aria-labelledby={s.title ? `${s.id}-h` : undefined}
          aria-label={s.title ? undefined : "POS Help Guide"}
        >
          <div className={`${ui.wrap} max-w-[60rem]`}>
            {s.title && <h2 id={`${s.id}-h`} className={ui.h2}>{s.title}</h2>}
            {s.intro && (
              <div className={s.title ? "mt-4" : ""}>
                <Blocks blocks={s.intro} />
              </div>
            )}
            {s.groups.length > 0 && (
              <ul className={`grid gap-4 md:gap-6 ${s.title ? "mt-8" : ""}`}>
                {s.groups.map((g) => (
                  <Card key={g.title} g={g} />
                ))}
              </ul>
            )}
            {s.summary && (
              <div {...ui.rv(0, `mt-8 rounded-card p-6 text-white sm:p-8 ${ui.ctaBg}`)}>
                <h3 className={`${ui.heading} text-[1.25rem] font-normal`}>Quick Summary</h3>
                <p className="mt-3 text-[1.0625rem] text-fog-200">{s.summary}</p>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
