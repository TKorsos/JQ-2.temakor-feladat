
$(document).ready(function(){
    // get, set
    $('#getset1 button').first().click(function(){
        alert( $('#getset1 p').text() );
    });
    $('#getset1 button').last().click(function(){
        $('#getset1 p').text('Módosított szöveg!');
    });
    $('#getset2 button').first().click(function(){
        alert( $('#getset2 p').html() );
    });
    $('#getset2 button').last().click(function(){
        $('#getset2 p').html('<p>Módosított <i>szöveg</i>!</p>');
    });
    $('#getset3 button').first().click(function(){
        alert( $('#getset3 span').attr('title') );
    });
    $('#getset3 button').last().click(function(){
        $('#getset3 span').attr('title', 'nem span');
    });
    $('#getset4 button').first().click(function(){
        alert( $('#getset4 input').val() );
    });
    $('#getset4 button').last().click(function(){
        $('#getset4 input').val('módosított kezdőérték');
    });

    // tartalom beszúrása
    $('#jqbeszur button').eq(0).click(function(){
        $('#jqbeszur p').append(' - <b>append szöveg</b>');
    });
    $('#jqbeszur button').eq(1).click(function(){
        $('#jqbeszur p').prepend('<b>prepend szöveg</b> - ');
    });
    $('#jqbeszur button').eq(2).click(function(){
        $('#jqbeszur p').before('<b>before szöveg</b> - ').after(' - <b>after szöveg</b>');
    });
    let var1 = 'első szöveg<br>';
    let var2 = 'második szöveg<br>';
    let var3 = 'harmadik szöveg<br>';
    $('#jqbeszur button').eq(3).click(function(){
        $('#jqbeszur p').before(var1, var2, var3).after(var3, var2, var1);
    });

    // eltávolítás
    $('#jqdelete button').eq(0).click(function(){
        $('#jqdelete p').empty();
    });
    $('#jqdelete button').eq(1).click(function(){
        $('#jqdelete p').remove();
    });
    $('#jqdelete button').eq(2).click(function(){
        $('#jqdelete span').removeAttr('title');
    });

    // css osztályok
    $('#class button').first().click(function(){
        $('#class p').addClass('hozzaad');
    });
    $('#class button').last().click(function(){
        $('#class p').removeClass('border');
    });

    // dimenziók
    $('#dimenzio button').eq(0).click(function(){
        alert( 'width: ' + $('#dim').width() + ' height: ' + $('#dim').height() );
    });
    $('#dimenzio button').eq(1).click(function(){
        $('#dim').width(300).height(400);
    });
    $('#dimenzio button').eq(2).click(function(){
        alert( 'width: ' + $('#dim').innerWidth() + ' height: ' + $('#dim').innerHeight() );
    });
    $('#dimenzio button').eq(3).click(function(){
        $('#dim').innerWidth(440).innerHeight(100);
    });
    $('#dimenzio button').eq(4).click(function(){
        alert( 'width: ' + $('#dim').outerWidth() + ' height: ' + $('#dim').outerHeight() );
    });
    $('#dimenzio button').eq(5).click(function(){
        alert( 'width: ' + $('#dim').outerWidth(true) + ' height: ' + $('#dim').outerHeight(true) );
    });

    // elérés
    $('#root *').css('border', '5px solid grey');
    // jobb láthatóság kedvéért kap css definíciót
    $('#root li').parent().css('border-color', 'green');
    $('#root li').parents().css('outline', '5px solid red');
    $('#root li').parentsUntil('div').css('outline', '5px solid blue');
    $('#root h2').siblings().css('color', 'purple');
    $('#root h2').prevUntil('div').css('font-style', 'italic');
    $('#root h2').next().css('font-weight', 'bold');
    $('#root h2').nextAll().css('background-color', 'yellow');
});

