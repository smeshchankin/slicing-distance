(function() {
    populator.populateFromJson();

    const submenu = [
        [
            { id: 'news', name: 'News Feed', class: 'active' },
            { id: 'messages', name: 'Messages', class: '' },
            { id: 'marketplace', name: 'Marketplace', class: '' }
        ],
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

    populator.populate('.submenu-1', submenu[0]);
    populator.populate('.submenu-2', submenu[1]);
    populator.populate('.submenu-3', submenu[2]);

    const createPostButtons = [
        { id: 'picture', name: 'Photo/Video' },
        { id: 'user-add', name: 'Tag friends' },
        { id: 'smile', name: 'Feeling/Activ...' },
        { id: 'dots', name: '' }
    ];
    populator.populate('.create-post-button', createPostButtons);
}());
