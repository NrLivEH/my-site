$('#subscribeform').submit(function() {
    var action = $(this).attr('action');
    $("#mesaj").slideUp(750, function() {
        $('#mesaj').hide();
        $('#subsubmit').after('').attr('disabled', 'disabled');
        $.post(action, {
            email: $('#subemail').val()
        }, function(data) {
            document.getElementById('mesaj').innerHTML = data;
            $('#mesaj').slideDown('slow');
            $('#subscribeform img.subscribe-loader').fadeOut('slow', function() {
                $(this).remove()
            });
            $('#subsubmit').removeAttr('disabled');
            if (data.match('success') != null) $('#subscribeform').slideUp('slow')
        })
    });
    return false
});
(function () {
    var layerButtons = document.querySelectorAll('.layer-tabs button[data-layer]');
    var panels = document.querySelectorAll('.layer-panel[data-panel]');
    var resumeSite = document.querySelector('.resume-site');

    layerButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var target = button.getAttribute('data-layer');
            layerButtons.forEach(function (item) {
                item.classList.toggle('active', item === button);
            });
            panels.forEach(function (panel) {
                panel.classList.toggle('active', panel.getAttribute('data-panel') === target);
            });
            if (resumeSite) {
                resumeSite.setAttribute('data-current-layer', target);
            }
        });
    });

    document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            var panel = trigger.nextElementSibling;
            var expanded = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', String(!expanded));
            if (panel) {
                panel.classList.toggle('open', !expanded);
            }
        });
    });

    var strengthCopy = document.getElementById('strength-copy');
    var strengthText = {
        traffic: '熟悉抖音直播生态及推广工具，掌握直播引流、精准人群投放、流量优化及成交转化方法。',
        studio: '直播全流程实操经验丰富，能独立搭建直播体系并推动常态化稳定运营。',
        collaboration: '善于多方沟通协调，能高效对接商场、品牌及主播团队，推动直播项目落地执行。'
    };

    document.querySelectorAll('.strength-item[data-strength]').forEach(function (item) {
        item.addEventListener('click', function () {
            document.querySelectorAll('.strength-item[data-strength]').forEach(function (button) {
                button.classList.toggle('active', button === item);
            });
            if (strengthCopy) {
                strengthCopy.textContent = strengthText[item.getAttribute('data-strength')];
            }
        });
    });
}());
