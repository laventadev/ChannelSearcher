// Disable Right Click Context Menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable F12 (Developer Tools)
document.onkeydown = function(e) {
    if (e.keyCode === 123) { // F12 Key
        return false;
    }
};

// Function to handle channel searches
function searchChannels() {
    const query = document.getElementById('searchInput').value.trim();
    const resultsDiv = document.getElementById('results');
    
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    // Clear previous results
    resultsDiv.innerHTML = '';

    // Regular expression to match platform and userID
    const regex = /^(\w+)\s+(\w+)$/;
    const match = query.match(regex);

    if (!match) {
        resultsDiv.innerHTML = `<p>Invalid input format. Please use "{platform} {userID}". Example: "Twitch ninja"</p>`;
        return;
    }

    // Convert to lowercase for case-insensitive matching
    const platform = match[1].toLowerCase();
    const userID = match[2].toLowerCase();

    // Platform mapping for channel pages (removed "/user/" from URLs)
    const platforms = {
        youtube: (userID) => `https://www.youtube.com/@${userID}`,  // Corrected for YouTube
        twitch: (userID) => `https://www.twitch.tv/${userID}`,
        facebook: (userID) => `https://www.facebook.com/${userID}`,
        mixer: (userID) => `https://mixer.com/${userID}`,
        dlive: (userID) => `https://dlive.tv/${userID}`,
        periscope: (userID) => `https://www.pscp.tv/${userID}`,
        trovo: (userID) => `https://trovo.live/${userID}`,
        linkedin: (userID) => `https://www.linkedin.com/in/${userID}`,
        vk: (userID) => `https://vk.com/${userID}`,
        discord: (userID) => `https://discord.com/${userID}`,
        hitbox: (userID) => `https://hitbox.tv/${userID}`,
        stream_me: (userID) => `https://stream.me/${userID}`,
        caffeine: (userID) => `https://www.caffeine.tv/${userID}`,
        goodgame: (userID) => `https://goodgame.ru/${userID}`,
        smashcast: (userID) => `https://www.smashcast.tv/${userID}`,
        youtubeGaming: (userID) => `https://gaming.youtube.com/${userID}`,
        trovoLive: (userID) => `https://trovo.live/${userID}`,
    };

    // Check if the platform exists in the mapping
    if (platforms[platform]) {
        const link = platforms[platform](userID);
        resultsDiv.innerHTML = `
            <a class="platform-link" href="${link}" target="_blank">Go to ${platform.charAt(0).toUpperCase() + platform.slice(1)} Channel for ${userID}</a>
        `;
    } else {
        resultsDiv.innerHTML = `<p>Platform "${platform}" not supported. Please try another.</p>`;
    }
}

// Function to check the owner's IP and give access to owner-only section
const ownerIP = '88.175.118.170'; 

function checkOwnerAccess() {
    // Placeholder for current user's IP
    const userIP = '88.175.118.170'; // Replace with actual IP fetch in a real-world scenario

    if (userIP === ownerIP) {
        window.location.href = 'https://laventadev.github.io/owner-only/';
    } else {
        alert("Invalid IP. To enter the owner manager, you'll have to be in the same city as the owner.");
    }
}
