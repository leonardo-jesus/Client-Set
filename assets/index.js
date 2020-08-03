var client = ZAFClient.init();

client.invoke('resize', { width: '100%', height: '200px' });

function buttonPressed() {
    client.set('ticket.subject', 'Title changed!')
    .then(function(data) {
        console.log(data);
    })
}