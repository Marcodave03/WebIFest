export function countOnScroll(
    callback: (count: number) => void,
    finalCount: number,
    stopCallback: () => void // Callback to stop the counting process
) {
    let countedReached = false;
    let count = 0;

    const handleScroll = () => {
        const countedSection = document.getElementById('counted');
        const targetSection = document.getElementById('counted');

        if (!countedSection || !targetSection) return;

        const countedRect = countedSection.getBoundingClientRect();
        const targetRect = targetSection.getBoundingClientRect();

        if (!countedReached && targetRect.top <= countedRect.bottom) {
            countedReached = true;
            const interval = setInterval(() => {
                if (count < finalCount) {
                    callback(count);
                    count++;
                } else {
                    clearInterval(interval);
                    window.removeEventListener('scroll', handleScroll);
                    stopCallback(); 
                }
            }, 0.1);
        }
    };

    window.addEventListener('scroll', handleScroll);
}
