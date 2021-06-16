(
    function(){

        angular.module("App",[])
        .controller("IntendToBuyController", IntendToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ListManagementService", ListManagementService);
        
        IntendToBuyController.$inject['ListManagementService'];
        function IntendToBuyController(ListManagementService){
            this.list=ListManagementService.returnIntendList();

            this.buy=function(index){
                ListManagementService.buy(index);
            }
        }
        AlreadyBoughtController.$inject['ListManagementService'];
        function AlreadyBoughtController(ListManagementService){
            this.list=ListManagementService.returnBoughtList();    
        }
        function ListManagementService(){
            var IntendList=[
                { name: "Cookies", quantity: "10" },
                { name: "Coke", quantity: "5" },
                { name: "Banana", quantity: "5" },
                { name: "Cake", quantity: "5" },
                { name: "Potato Chips", quantity: "4" },
                { name: "Pudding", quantity: "6" }
            ];
            var BoughtList=[];
            this.returnIntendList=function(){
                return IntendList;
            }
            this.returnBoughtList=function(){
                return BoughtList;
            }
            this.buy=function(index){
                BoughtList.push({
                    name: IntendList[index].name,
                    quantity: IntendList[index].quantity
                });
                IntendList.splice(index,1);
            }
        }
    }

)();