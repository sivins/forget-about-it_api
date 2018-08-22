SELECT * FROM public.Todo WHERE Todo.UserId = $1;
SELECT * FROM public.Grocery WHERE Grocery.UserId = $1;
SELECT * FROM public.Bill WHERE Bill.UserId = $1;
SELECT * FROM public.BillPayment WHERE BillPayment.UserId = $1;
SELECT * FROM public.Account WHERE Account.UserId = $1;
SELECT * FROM public.Purchase WHERE Purchase.UserId = $1;