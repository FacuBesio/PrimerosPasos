//* EFFECTS
export const transition_100 =
  "transition-all ease-in-out transform duration-150";
export const transition_150 =
  "transition-all ease-in-out transform duration-150";
export const transition_200 =
  "transition-all ease-in-out transform duration-200";
export const transition_300 =
  "transition-all ease-in-out transform duration-300";
export const transition_500 =
  "transition-all ease-in-out transform duration-500";
  export const transition_700 =
  "transition-all ease-in-out transform duration-700";
export const visible = "opacity-100 visible";
export const invisible = "opacity-0 invisible";
export const position_up = "mt-0";
export const position_down = "mt-9";

//* BUTTONS
export const back_button =
  "px-6 py-3 text-[12px] md:text-[18px] bg-red-300 text-white font-bold rounded-md hover:bg-red-400 hover:ring-red-400 focus:outline-none focus:ring-2 focus:ring-red-200";
export const enabled_button =
  "px-8 py-3 bg-green-500 bg-opacity-90 text-white text-[12px] md:text-[18px] font-bold rounded-md hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:bg-green-500 focus:ring-green-500 focus:scale-95";
export const disabled_button =
  "px-8 py-3 bg-slate-400 text-[12px] md:text-[18px] text-white font-bold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200";

//* ICONS
export const icon_style =`w-8 h-8 hover:scale-90 ${transition_200}`

//* FORM
export const input_form_style ="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
export const input_label_style ="w-full px-4 flex flex-col gap-2 text-[12px] md:text-[18px]"
export const input_editable_style ="w-full px-4 py-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
export const input_notEditable_style ="w-full px-4 py-2 font-bold bg-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400";


//? APP
export const appStyle =
  "min-w-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6]";

//? ADMIN
export const add_button =
  "bg-slate-400 hover:bg-slate-500 rounded-md p-3 text-center";
export const add_button_label =
  "text-white font-bold cursor-pointer text-[12px] md:text-[18px]";
// NavAside
export const selected =
  "w-10 h-10 scale-125 transition-transform duration-200 rounded-md p-1 bg-red-300 drop-shadow-md hover:drop-shadow-xl";
export const not_Selected =
  "w-10 h-10 hover:scale-125 hover:bg-red-100 transition-transform duration-200 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl";
// Products_Table
export const th_style =
  "p-1 md:p-4 border text-center text-[12px] md:text-[16px] lg:text-[18px]";
export const td_style =
  "p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]";
  //Filter
  export const label_filterBar_style = "w-full text-lg text-black/50 text-center rounded-lg bg-slate-200"

//? CART
export const cartAside_Container = `fixed left-0 top-0 h-screen w-[100vw] bg-black bg-opacity-50 backdrop-blur-sm transition-all z-[9999] text-[12px] md:text-[18px] ${transition_100}`
export const cartAsideStyle = `fixed overflow-y-scroll py-2 items-center justify-between h-screen right-0 top-0 bg-[#eee] px-2 text-center flex flex-col gap-2 ${transition_500}`
export const cartIterator_style = "flex justify-center border border-red-200 p-2 rounded-md m-2 w-full bg-[#c9b7b7] bg-opacity-50 relative"
export const buttonsCartAside = "items-center w-full flex bg-gray-200 p-2 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"

//? CONTACT US
export const contactUsStyle = `p-8 border-t-4 border-white ${transition_200}`;
export const contactUs_position_up = "mt-0";
export const contactUs_position_down = "mt-9";
export const contactUs_form_style =
  "flex p-4 gap-6 overflow-hidden justify-center bg-[#e8ced5] border-white border-2 rounded-lg relative text-[12px] md:text-[18px]";

//? FILTER
export const asideFilterStyles = `px-6 bg-red-200/50 flex flex-col items-center justify-start min-h-screen ${transition_500}`;
export const filterSelectorStyle =
  "text-[#5a5b5a] border border-white bg-white rounded-md p-2 text-[12px] md:text-[18px] w-full capitalize";
  export const filterSelectorStyle_dashboard =
  "text-[#5a5b5a] border border-white bg-white rounded-md p-1 text-[12px] md:text-[18px] capitalize";
export const filterInputsStyle =
  "text-[#5a5b5a] border border-white bg-white rounded-md p-2 text-[12px] md:text-[18px] w-full";
  export const filterInputsStyle_dashboard =
  "text-[#5a5b5a] border border-white bg-white rounded-md p-1 text-[12px] md:text-[18px] w-[100px]";

//? FOOTER
export const footerStyle = `flex justify-between items-center p-6 z-50 text-[12px] md:text-[18px] border-t-4 border-t-white ${transition_200}`;

//? HOME
export const homeStyle = `border-t-4 border-t-white flex-grow ${transition_200}`;
export const home_position_up = "mt-0";
export const home_position_down = "mt-9";

//? NAVBAR
export const navBarStyle = `flex items-center flex-col justify-center md:flex-row gap-2 pb-2 ${transition_200}`;
// MAIN LINKS
export const mainLink_style = `md:text-lg hover:text-[#DBB1BC] hover:scale-105 ${transition_200}`;
export const mainLinkSelected_style = `md:text-lg text-[#DBB1BC] font-bold hover:text-[#DBB1BC] scale-105 ${transition_200}`;
// CATEGORY LINKS
export const categoryLinksStyle = `flex justify-start md:justify-center items-center w-full gap-4 overflow-x-auto text-[12px] md:text-[18px] overflow-y-hidden ${transition_200}`;
export const categoryLink_style = `hover:text-[#Dbb1bc] ${transition_200}`;
export const categoryLinkSelected_style = `text-[#Dbb1bc] font-bold hover:text-[#DBB1BC] ${transition_200}`;

//? PAGINATED
export const paginatedStyle =
  "flex justify-center items-center gap-6 px-4 mt-2";
export const paginated_button = `hover:shadow-xl hover:shadow-[#fdd9e3] hover:scale-90 border border-white px-1 rounded-md bg-white text-[#5a5b5a] text-[12px] text-black/50 md:text-[18px] ${transition_200}`;

//? PRODUCTS
export const productsStyle = `w-full min-h-screen ${transition_200}`;
export const product_content = `bg-white relative rounded-lg flex flex-col items-center hover:shadow-2xl hover:shadow-[#d2afb8] cursor-pointer hover:scale-95 ${transition_200}`;
export const product_no_content = "flex flex-col items-center justify-center";

//? PRODUCT DEATAIL
export const productDetailStyle = `bg-white flex flex-col md:flex-row p-10 justify-around text-[12px] md:text-[18px] ${transition_200}`;
export const productDetail_content = `bg-white w-full flex flex-col md:flex-row justify-around text-[12px] md:text-[18px] ${transition_200}`;
export const productDetail_position_up = "mt-0";
export const productDetail_position_down = "mt-10";

//? PROFILE
export const profileStyle = `flex flex-grow border-t-4 border-t-white ${transition_200}`;
export const profile_navAside = `border-t-4 border-t-white flex-grow ${transition_200}`;

//? SHOP
export const shopStyle = `flex flex-grow border-t-4 border-t-white ${transition_200}`;
export const shop_position_up = `-mt-3`;
export const shop_position_down = `mt-3`;
export const shop_content_style = `flex flex-col items-center px-6 py-3 gap-3 justify-start w-full h-full`;

//? SORTER
export const sorterSelectorStyle =
  "text-[#5a5b5a] border border-white bg-white rounded-md p-1 text-[12px] md:text-[16px] w-full capitalize";

//? TAGS
export const tagsStyle = `flex items-center justify-start px-4 h-10 gap-4 ${transition_200}`;
export const tag_style = `text-[#5a5b5a] text-[12px] md:text-[16px] border-2 bg-white border-white w-fit p-2 text-sm rounded-md hidden lg:block cursor-pointer  hover:bg-red-200 hover:border-red-200 hover:scale-105 ${transition_200}`;

// export const tableStyle = "px-2 py-2 text-black text-[12px] md:text-[18px]"

