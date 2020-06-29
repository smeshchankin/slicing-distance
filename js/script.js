(function() {
    const menu = [
        { name: 'Home' },
        { name: 'Create' }
    ];
    populator.populate('.navigation-link', menu);

    const icons = [
        { id: 'users', classes: '' },
        { id: 'chat', classes: '' },
        { id: 'bell', classes: '' },
        { id: 'info', classes: 'pipe menu' }
    ];
    populator.populate('.icon-link', icons);
}());
