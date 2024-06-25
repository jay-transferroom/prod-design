var tableId = 'example',
    table;

function selectRow() {
    $('#' + tableId + ' tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
    });
}


$(document).ready(function() {

    var tableId = 'example',
        table;

    var columnDefs = [{
            title: "Name",
            data: null,
            targets: 0,
            width: '50px',
            render: function(data) { return (data[0]); }
        },
        {
            title: "Email",
            data: null,
            targets: 1,
            width: '60px',
            render: function(data) { return (data[1]); }
        },
        {
            title: "Age",
            data: null,
            targets: 2,
            width: '20px',
            render: function(data) { return (data[2]); }
        },
        {
            title: "Country",
            data: null,
            targets: 3,
            width: '20px',
            render: function(data) { return (data[3]); }
        },
        {
            title: "Account Type",
            data: null,
            targets: 4,
            width: '40px',
            render: function(data) { return (data[4]); }
        },
        {
            title: "Customer Type",
            data: null,
            targets: 5,
            width: '40px',
            render: function(data) { return (data[5]); }
        },
        {
            title: "Status",
            data: null,
            targets: 6,
            width: '40px',
            render: function(data) { return (data[6]); }
        },
        {
            title: "Last login",
            data: null,
            targets: 7,
            width: '40px',
            render: function(data) { return (data[7]); }
        },
        {
            title: "Billing Email",
            data: null,
            targets: 8,
            width: '40px',
            render: function(data) { return (data[8]); }
        },
        {
            title: "Payment Stamp",
            data: null,
            targets: 9,
            width: '40px',
            render: function(data) { return (data[9]); }
        },
        {
            title: "Stripe Ref",
            data: null,
            targets: 10,
            width: '40px',
            render: function(data) { return (data[10]); }
        },
        {
            title: "Access/Promo Code",
            data: null,
            targets: 11,
            width: '60px',
            render: function(data) { return (data[11]); }
        },
        {
            title: "Organisation",
            data: null,
            targets: 12,
            width: '60px',
            render: function(data) { return (data[12]); }
        },
        {
            title: "Group",
            data: null,
            targets: 13,
            width: '60px',
            render: function(data) { return (data[13]); }
        },
        {
            title: "Paid Status",
            data: null,
            targets: 14,
            width: '60px',
            render: function(data) { return (data[14]); }
        },
        {
            title: "Course",
            data: null,
            targets: 15,
            width: '80px',
            render: function(data) { return (data[15]); }
        },
        {
            title: "Cohort Ref",
            data: null,
            targets: 16,
            width: '60px',
            render: function(data) { return (data[16]); }
        },
        {
            title: "Class Type",
            data: null,
            targets: 17,
            width: '50px',
            render: function(data) { return (data[17]); }
        },
        {
            title: "Tutor Allocated",
            data: null,
            targets: 18,
            width: '40px',
            render: function(data) { return (data[18]); }
        },
        {
            title: "Class scheduled?",
            data: null,
            targets: 19,
            width: '30px',
            render: function(data) { return (data[19]); }
        },
        {
            title: "Week No.",
            data: null,
            targets: 20,
            render: function(data) { return (data[20]); }
        },
        {
            title: "Profile",
            data: null,
            targets: 21,
            width: '30px',
            render: function(data) { return (data[21]); }
        },
        {
            title: "Identity",
            data: null,
            targets: 22,
            width: '30px',
            render: function(data) { return (data[22]); }
        },
        {
            title: "English",
            data: null,
            targets: 23,
            width: '30px',
            render: function(data) { return (data[23]); }
        },
        {
            title: "Video",
            data: null,
            targets: 24,
            width: '30px',
            render: function(data) { return (data[24]); }
        },
        {
            title: "Tech",
            data: null,
            targets: 25,
            width: '30px',
            render: function(data) { return (data[25]); }
        },
        {
            title: "Progress",
            data: null,
            targets: 26,
            width: '30px',
            render: function(data) { return (data[26]); }
        },
        {
            title: "Gender",
            data: null,
            targets: 27,
            width: '30px',
            render: function(data) { return (data[27]); }
        },
    ];


    loadDataTable();

    function loadDataTable() {

        // Adjust any columnDef widths set by the user
        setUserColumnsDefWidths();

        table = $('#' + tableId).DataTable({
            destroy: true,
            autoWidth: false,
            columnDefs: columnDefs,
            deferRender: true,
            fixedHeader: true,
            scrollY: 300,
            scrollX: true,
            "sScrollX": "100%",
            "bScrollCollapse": true,
            scrollY: true,
            scrollCollapse: true,
            searching: true,
            footer: true,
            pagintation: true,
            paging: true,
            scrollX: true,
            lengthChange: true,
            searching: true,
            ordering: true,
            fixedColumns: {
                leftColumns: 1
            },
            searchPanes: {
                viewTotal: true,
                columns: [0, 3, 4]
            },
            "processing": true,
            pageLength: 2,
            "pageLength": 10,
            "ajax": '/js/admin-data.txt',

            initComplete: function(settings) {
                //Add JQueryUI resizable functionality to each th in the ScrollHead table

                $('#' + tableId + '_wrapper .dataTables_scrollHead thead th').resizable({
                    handles: "e",
                    alsoResize: '#' + tableId + '_wrapper .dataTables_scrollHead table', //Not essential but makes the resizing smoother
                    stop: function() {
                        saveColumnSettings();
                        loadDataTable();
                    }
                });

                $('#dropdown1').on('change', function() {
                    table.columns(5).search(this.value).draw();
                });
                $('#dropdown2').on('change', function() {
                    table.columns(4).search(this.value).draw();
                });

                selectRow();

                this.api().columns().every(function() {
                    var column = this;
                    var select = $('<select><option value=""></option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function() {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );

                            column
                                .search(val ? '^' + val + '$' : '', true, false)
                                .draw();
                        });

                    column.data().unique().sort().each(function(d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>')
                    });
                });

                // #myInput is a <input type="text"> element
                $('#tableSearch').on('keyup', function() {
                    table.search(this.value).draw();
                });

            },
        });

    }


    function setUserColumnsDefWidths() {

        var userColumnDef;

        // Get the settings for this table from localStorage
        var userColumnDefs = JSON.parse(localStorage.getItem(tableId)) || [];

        if (userColumnDefs.length === 0) return;

        selectRow();

        columnDefs.forEach(function(columnDef) {

            // Check if there is a width specified for this column
            userColumnDef = userColumnDefs.find(function(column) {
                return column.targets === columnDef.targets;
            });

            // If there is, set the width of this columnDef in px
            if (userColumnDef) {

                columnDef.width = userColumnDef.width + 'px';

            }

        });

    }


    function saveColumnSettings() {

        var userColumnDefs = JSON.parse(localStorage.getItem(tableId)) || [];

        var width, header, existingSetting;

        table.columns().every(function(targets) {

            // Check if there is a setting for this column in localStorage
            existingSetting = userColumnDefs.findIndex(function(column) { return column.targets === targets; });

            // Get the width of this column
            header = this.header();
            width = $(header).width();

            if (existingSetting !== -1) {

                // Update the width
                userColumnDefs[existingSetting].width = width;

            } else {

                // Add the width for this column
                userColumnDefs.push({
                    targets: targets,
                    width: width,
                });

            }

        });

        // Save (or update) the settings in localStorage
        localStorage.setItem(tableId, JSON.stringify(userColumnDefs));

    }

});