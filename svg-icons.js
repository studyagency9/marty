/**
 * SVG ICONS LIBRARY
 * Professional icons to replace emojis
 */

const SVG_ICONS = {
    target: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>`,
    
    fire: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 7 6 7 11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11C17 6 12 2 12 2Z"/>
        <path d="M12 16C9.23858 16 7 18.2386 7 21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21C17 18.2386 14.7614 16 12 16Z"/>
    </svg>`,
    
    muscle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6V8H14V6C14 4.89543 14.8954 4 16 4C17.1046 4 18 4.89543 18 6V12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12V10H10V12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12V6Z"/>
        <path d="M8 14V18C8 19.1046 8.89543 20 10 20C11.1046 20 12 19.1046 12 18V16H12C12 19.1046 13.1046 20 14 20C14.8954 20 16 19.1046 16 18V14"/>
    </svg>`,
    
    timer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="13" r="8"></circle>
        <polyline points="12 9 12 13 15 15"></polyline>
        <path d="M9 2h6"></path>
    </svg>`,
    
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>`,
    
    play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
    </svg>`,
    
    home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>`,
    
    dumbbell: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 6H4V18H6V6Z"/>
        <path d="M20 6H18V18H20V6Z"/>
        <path d="M8 11H16V13H8V11Z"/>
        <path d="M6 9H8V15H6V9Z"/>
        <path d="M16 9H18V15H16V9Z"/>
    </svg>`,
    
    chart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>`,
    
    bell: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>`,
    
    walk: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="4" r="2"/>
        <path d="M10 8L8 22H10L12 16L14 22H16L14 8H10Z"/>
        <path d="M12 16L10 18L8 20"/>
    </svg>`,
    
    stretch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="5" r="2"/>
        <path d="M8 8L6 14L8 20H10L12 14L14 20H16L18 14L16 8H8Z"/>
    </svg>`
};

/**
 * Create an icon element
 */
function createIcon(iconName, className = '') {
    const iconDiv = document.createElement('div');
    iconDiv.className = `icon ${className}`;
    iconDiv.innerHTML = SVG_ICONS[iconName] || '';
    return iconDiv;
}

/**
 * Replace emoji with icon
 */
function replaceEmojiWithIcon(element, iconName, className = '') {
    const icon = createIcon(iconName, className);
    element.innerHTML = '';
    element.appendChild(icon);
}
