import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, InfoWindow, Polygon } from '@vis.gl/react-google-maps';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { placesData, zonesData, categoryColors, categoryIcons, Place, Zone } from '@/data/mapData';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDummyKeyForDemo';

export default function MapPage() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [showZones, setShowZones] = useState(true);

  const filteredPlaces = selectedCategory === 'Все' 
    ? placesData 
    : placesData.filter(place => place.category === selectedCategory);

  const categories = ['Все', 'Канцелярия', 'Ксерокопия', 'Еда', 'Магазины', 'Другое'];

  const centerPosition = { lat: 55.753215, lng: 37.622504 };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Карта заведений</h2>
        <p className="text-gray-600 mt-1">Полезные места для студентов рядом с колледжем</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Filter" className="text-primary" size={20} />
                Фильтры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Категория</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      className="w-full justify-start gap-2"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category !== 'Все' && (
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: categoryColors[category as keyof typeof categoryColors] }}
                        />
                      )}
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Показать зоны</span>
                  <button
                    onClick={() => setShowZones(!showZones)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      showZones ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        showZones ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                {showZones && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-green-500 rounded opacity-30"></div>
                      <span className="text-gray-600">Безопасная зона</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-red-500 rounded opacity-30"></div>
                      <span className="text-gray-600">Зона ремонта</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" className="text-primary" size={20} />
                Места ({filteredPlaces.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredPlaces.map((place) => (
                  <div
                    key={place.id}
                    className="p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
                    onClick={() => setSelectedPlace(place)}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${categoryColors[place.category]}15` }}
                      >
                        <Icon 
                          name={categoryIcons[place.category] as any} 
                          size={16}
                          style={{ color: categoryColors[place.category] }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-gray-900 truncate">{place.name}</p>
                        <Badge 
                          variant="outline" 
                          className="mt-1 text-xs"
                          style={{ 
                            borderColor: categoryColors[place.category],
                            color: categoryColors[place.category] 
                          }}
                        >
                          {place.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-[600px] relative">
                <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                  <Map
                    defaultCenter={centerPosition}
                    defaultZoom={15}
                    mapId="studapp-map"
                    gestureHandling="greedy"
                    disableDefaultUI={false}
                  >
                    {showZones && zonesData.map((zone) => (
                      <Polygon
                        key={zone.id}
                        paths={zone.coordinates}
                        fillColor={zone.color === 'green' ? '#10B981' : '#EF4444'}
                        fillOpacity={0.3}
                        strokeColor={zone.color === 'green' ? '#10B981' : '#EF4444'}
                        strokeOpacity={0.8}
                        strokeWeight={2}
                      />
                    ))}

                    {filteredPlaces.map((place) => (
                      <AdvancedMarker
                        key={place.id}
                        position={place.position}
                        onClick={() => setSelectedPlace(place)}
                      >
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform"
                          style={{ backgroundColor: categoryColors[place.category] }}
                        >
                          <Icon 
                            name={categoryIcons[place.category] as any} 
                            size={20}
                            className="text-white"
                          />
                        </div>
                      </AdvancedMarker>
                    ))}

                    {selectedPlace && (
                      <InfoWindow
                        position={selectedPlace.position}
                        onCloseClick={() => setSelectedPlace(null)}
                      >
                        <div className="p-2 max-w-xs">
                          <h3 className="font-semibold text-gray-900 mb-1">{selectedPlace.name}</h3>
                          <Badge 
                            variant="outline" 
                            className="mb-2"
                            style={{ 
                              borderColor: categoryColors[selectedPlace.category],
                              color: categoryColors[selectedPlace.category] 
                            }}
                          >
                            {selectedPlace.category}
                          </Badge>
                          {selectedPlace.description && (
                            <p className="text-sm text-gray-600">{selectedPlace.description}</p>
                          )}
                        </div>
                      </InfoWindow>
                    )}
                  </Map>
                </APIProvider>

                <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="text-primary mt-0.5" size={18} />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Как пользоваться</p>
                      <p className="text-xs text-gray-600">
                        Нажмите на маркер для просмотра информации. Используйте фильтры для поиска нужных заведений.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
