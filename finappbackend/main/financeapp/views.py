from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ModelSerializer
from .models import ProductModel  # Import your ProductModel here
from rest_framework.decorators import api_view
from rest_framework import viewsets,status

class Personloan(APIView):
    def get(self, request):
        datas = ProductModel.objects.all()
        serializer = ModelSerializer(datas, many=True)  # Use 'instance' instead of 'data'
        return  Response(serializer.data)
    def post(self, request):

        serializer = ModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data": serializer.data})
        else:
            return Response({"error": serializer.errors})

    def put(self,request,pk):
        instance = ProductModel.objects.get(id=pk)
        print(instance)
        if instance is not None:
            serializer = ModelSerializer(instance,data = request.data)
            if serializer.is_valid():
                serializer.save()
        data = ProductModel.objects.all()
        obj = ModelSerializer(data,many=True)
        return Response(obj.data)
    
    def patch(self,request,pk):
        instance = ProductModel.objects.get(id=pk)
        if instance:
            serializer = ModelSerializer(instance,data = request.data,partial = True)
            if serializer.is_valid():
                serializer.save()
        data = ProductModel.objects.all()
        obj = ModelSerializer(data,many=True)
        return Response(obj.data)
    def delete(self,request,pk):
        instance = ProductModel.objects.get(id=pk)
        if instance:
            instance.delete() 
        data = ProductModel.objects.all() 
        obj = ModelSerializer(data,many = True)
        return Response(obj.data)



@api_view(['GET','POST'])   # funciton based api_view for get and post 
def gettingfromapiview(request):
    if request.method =='GET':
        data = ProductModel.objects.all()
        serializer = ModelSerializer(data=data,many= True)
        if serializer.is_valid():
            serializer.save() 
        return Response({"data":serializer.data})
    elif request.method == 'POST':
        serializer = ModelSerializer(data = request.data['data'])
        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['PUT','PATCH','DELETE']) # funciton based api_view for updates
def updateapifunction(request,pk):
    
    instance = ProductModel.objects.get(id =pk) 
     
    if request.method =='PUT':
        data = request.data 
        serializer = ModelSerializer (instance, data = data)
        if serializer.is_valid() :
            serializer.save() 
        return Response({"data":serializer.data}) 
    elif request.method =='PATCH':
        data = request.data 
        serializer = ModelSerializer(instance,data=data,partial = True)
        if serializer.is_valid():
            serializer.save() 
        return Response({"response":serializer.data})
    elif request.method =='DELETE':
        if instance:
            instance.delete() 
        data = ProductModel.objects.all() 
        serializer = ModelSerializer(data= data,many = True) 
        if serializer.is_valid():
            serializer.save()
        return Response({"data":serializer.data})


class ViewSetsClass(viewsets.ViewSet):  # class based viewset without functions like get,post,put..etc
    queryset = ProductModel.objects.all()
    serializer_class = ModelSerializer

    def list(self, request):
        queryset = ProductModel.objects.all()
        serializer = ModelSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = ProductModel.objects.get(pk=pk)
        serializer = ModelSerializer(queryset)
        return Response(serializer.data)

    def update(self, request, pk=None):
        instance = ProductModel.objects.get(pk=pk)
        serializer = ModelSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        # Similar to the 'update' method, but for partial updates
        pass

    def destroy(self, request, pk=None):
        instance = ProductModel.objects.get(pk=pk)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
