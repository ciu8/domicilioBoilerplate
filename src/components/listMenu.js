export const ListMenu = ({ menu = Array()}) => {
	return (
        menu.map(element =>
		<div id={element.name.replace(' ', '_')} className="relative py-5"> 
            <p class="text-yellow-700 text-sm md:text-md lg:text-lg">€{element.price}...{element.name}</p>
        </div>
        )
	);
};
