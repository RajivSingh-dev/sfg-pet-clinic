package guru.springframework.sfgpetclinic.services.map;

import guru.springframework.sfgpetclinic.model.BaseEntity;
import javafx.print.Collation;

import java.util.*;

public abstract class AbstractMapService<T extends BaseEntity,ID extends Long> {

    protected Map<Long,T> map = new HashMap<>();


    Set<T> findAll(){
        return new HashSet<>(map.values());
    }

T findById(ID id)
{
return map.get(id);
}

T save(T object)
{
    if(object != null){
        if(object.getId() == null)
            object.setId(getNextID());
        map.put(object.getId(), object);
    }
    else {
        throw new RuntimeException("Object can't be null");
    }


return object;
}

void deleteById(ID id)
{
    map.remove(id);
}

void delete(T object)
{
    map.entrySet().removeIf(entry -> entry.getValue().equals(object));
}
private Long getNextID(){

        Long nextId = null;
        try {
            return Collections.max(map.keySet()) + 1;
        }
        catch (Exception e)
        {
            nextId = 1L;
        }
        return nextId;
}
}
