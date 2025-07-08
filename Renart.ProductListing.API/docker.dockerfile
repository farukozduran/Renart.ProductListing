# 1. SDK image ile build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Proje dosyalarını kopyala
COPY . ./

# Restore ve publish
RUN dotnet restore
RUN dotnet publish -c Release -o out

# 2. Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/out ./

# Ortamdan gelen PORT'u kullan
ENV ASPNETCORE_URLS=http://+:$PORT

ENTRYPOINT ["dotnet", "Renart.ProductListing.API.dll"]
