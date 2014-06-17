Ext.application({
    name:'mi_imc',
    launch:function(){
        Ext.create('Ext.Panel',{
          fullscreen:true,
          items:[
              {
                  xtype:'textfield',
                  label:'Tu peso',
                  placeHolder:'Introduce tu peso',
                  id:'peso'
              },
              {
                  xtype:'textfield',
                  label:'Altura',
                  placeHolder:'Tu altura en m.',
                  id:'altura'
              },
              {
                  xtype:'button',
                  text:'calcular imc',
                  id:'calcular',
                  ui:'confirm',
                handler:function(){
                    Ext.Msg.alert('Cola de rata');
                }
              },
              {
                  html:'Resultado',
                  id:'resultado'
              }
          ]
        });
    }
});