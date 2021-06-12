(function() {
    populator.populateFromJson();

    const submenu = [
        { id: 'pages', name: 'Pages', class: '' },
        { id: 'groups', name: 'Groups', class: '' },
        { id: 'events', name: 'Events', class: '' },
        { id: 'games', name: 'Games', class: '' }
    ];

    populator.populate('.submenu-3', submenu);
}());
