export default {

    routes: [
        // restaunrat types
        {
            name: "Restautant Type",
            path: "restaurant/restaurant-type",
            component: () =>
                import("../../views/modules/restaurant/restaurantType"),
        },
        {
            name: "Restautant Type Register",
            path: "restaurant/restaurant-type/register",
            component: () =>
                import("../../views/modules/restaurant/restaurantType/Register"),
        },
        {
            name: "Restautant Type Edit",
            path: "restaurant/restaurant-type/edit/:id",
            props: true,
            component: () =>
                import("../../views/modules/restaurant/restaurantType/Register"),
        },
    ],
    menu: {
        group: '/restaurant',
        title: 'Restaurantes',
        icon: 'mdi-food',
        children: [

            {
                title: "Tipo de Restaurante",
                icon: "mdi-comment-outline",
                to: "restaurant-type",
            }
        ]
    }
};
