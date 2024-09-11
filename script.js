function showDetails(college) {
    let detailsContent = '';
    
    switch (college) {
        case 'mit':
            detailsContent = '<strong>Massachusetts Institute of Technology (MIT)</strong><br>' +
                             'Located in Cambridge, Massachusetts, MIT is renowned for its cutting-edge research and innovation in various fields of engineering.';
            break;
        case 'stanford':
            detailsContent = '<strong>Stanford University</strong><br>' +
                             'Located in Stanford, California, Stanford University is known for its strong programs in engineering and technology, and its close ties to Silicon Valley.';
            break;
        case 'ucb':
            detailsContent = '<strong>University of California, Berkeley</strong><br>' +
                             'Located in Berkeley, California, UC Berkeley is known for its excellent engineering programs and research contributions.';
            break;
        default:
            detailsContent = 'Click on a college name to see more details.';
    }
    
    document.getElementById('details-content').innerHTML = detailsContent;
}
