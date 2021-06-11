(function() {
    populator.populateFromJson();

    const submenu = [
        [
            { id: 'cup', name: 'Product Design', class: '' },
            { id: 'cup', name: 'UX &amp; UI', class: '' },
            { id: 'cup', name: 'Figma', class: '' },
            { id: 'cup', name: 'Ant Design', class: '' }
        ],
        [
            { id: 'pages', name: 'Pages', class: '' },
            { id: 'groups', name: 'Groups', class: '' },
            { id: 'events', name: 'Events', class: '' },
            { id: 'games', name: 'Games', class: '' }
        ]
    ];

    populator.populate('.submenu-2', submenu[1]);
    populator.populate('.submenu-3', submenu[2]);
}());
