// container for all menu items
export class Menu {
    items: Array<Item>;
}

// defines the structure of a dropdown menu
export class Item {
    label: string;
    subItems: Array<SubItem>;
}

// defines the structure of a submenu
export class SubItem {
    label: string;
    link: string;
}