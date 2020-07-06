(function() {
    const menu = [
        { name: 'Home' },
        { name: 'Create' }
    ];
    populator.populate('.navigation-link', menu);

    const icons = [
        { id: 'users', classes: '', notificationClass: 'notification', notification: 3 },
        { id: 'chat', classes: '', notificationClass: 'notification', notification: 8 },
        { id: 'bell', classes: '', notificationClass: 'notification', notification: 88 },
        { id: 'info', classes: 'pipe menu', notification: '' }
    ];
    populator.populate('.icon-link', icons);

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

    const postButtons = [
        { id: 'like', name: 'Like' },
        { id: 'comment', name: 'Comment' },
        { id: 'share', name: 'Share' }
    ];
    populator.populate('.post-button', postButtons);
}());
