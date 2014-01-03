(function() {
  $(function() {
    var tbody;
    tbody = $('tbody');
    return $.ajax({
      url: 'data.xml',
      dataType: 'xml',
      success: function(xml) {
        var people;
        people = $(xml);
        return people.find('person').each(function() {
          var mail, name, num, person, text_mail, text_name, text_num, tr;
          person = $(this);
          text_num = person.find('no').text();
          text_name = person.find('name').text();
          text_mail = person.find('mail').text();
          tr = $('<tr>');
          num = $('<td>').text(text_num);
          name = $('<td>').text(text_name);
          mail = $('<td>').text(text_mail);
          tr.append(num);
          tr.append(name);
          tr.append(mail);
          return tbody.append(tr);
        });
      }
    });
  });

}).call(this);

/*
//@ sourceMappingURL=script.js.map
*/