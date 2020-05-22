$(document).ready(readyNow);

let cohorts = [
    {
        name: 'Ada',
        status: 'In Tier 2',
        count: 13
    },
    {
        name: 'Babbage',
        status: 'In Tier 1',
        count: 0
    },
    {
        name: 'Cython',
        status: 'In Tier 3',
        count: 100
    }
];



function readyNow() {
    console.log('We are ready with jQuery and JS!');
    emptyTbody();
    setUp();
}

function emptyTbody() {
    console.log('In emptyTbody!');
	$('table tbody').empty();
}

function setUp() {
    console.log('In setUp function!');
    
    for (const cohort of cohorts) {
        let rowEl = $('<tr></tr>');
        // const buttonEl = $('<button>Delete Row</button>');
        rowEl.append(`<td>${cohort.name}</td>`);
        rowEl.append(`<td>${cohort.count}</td>`);
        rowEl.append(`<td>${cohort.status}</td>`);
        rowEl.append(`<td><button class="delete-button">Delete Row</button></td>`);
        $('table tbody').append(rowEl);
    }
    $('.delete-button').click(function(event) {
        // alert('you clicked me!');
        // 'this'
        // envent.target
        // const this = event.target

        const el = event.target;
        // let el2 = $('.delete-button').parent('trs');
        // el2.fadeOut(2000);

        // $(el).parent().parent().remove();
        // $(el).parents('tr').fadeOut(1000).remove();
        $(el).closest('tr').remove();

    });
}

// let buttonPurge = $('#button-purge');

// $('#buttonPurge').click(function () {
//     emptyTbody();
// })