# 1. SDK image: kodu build etmek için
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Proje dosyalarını kopyala
COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

# 2. Runtime image: sadece yayınlanan app'ı çalıştırır
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/out ./

# Render'ın belirlediği portu kullan
ENV ASPNETCORE_URLS=http://+:$PORT

# Giriş noktası
ENTRYPOINT ["dotnet", "Renart.ProductListing.API.dll"]
