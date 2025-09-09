  

import demo_img_1 from "/assets/img/header/home-1.jpg";
import demo_img_2 from "/assets/img/header/home-2.jpg";
import demo_img_3 from "/assets/img/header/home-3.jpg";
 

interface DataType {
	id: number;
	title: string;
	link: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
		demo_img?: string;
	}[];
}

// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Ana Sayfa",
		link: "/",
		img_dropdown: false,

	},
	{
		id: 2,
		title: "Hakkımızda",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Hizmetler",
		link: "/service",
		has_dropdown: false,
		
	},
	// 	{
	// 	id: 4,
	// 	title: "Ürünler",
	// 	link: "/product-list",
	// 	has_dropdown: false,
	// },
	{
		id: 5,
		title: "Blog",
		link: "/blog",
		has_dropdown: false,
		
	},
	// 	{
	// 	id: 6,
	// 	title: "Sertifikalar",
	// 	link: "/gallery",
	// 	has_dropdown: false,
	// },
	{
		id: 7,
		title: "SSS",
		link: "/faq",
		has_dropdown: false,
		
	},
	{
		id: 8,
		title: "İletişim",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
