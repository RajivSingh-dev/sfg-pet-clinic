package guru.springframework.sfgpetclinic.services;


import guru.springframework.sfgpetclinic.model.Owner;

import java.util.List;
import java.util.Set;

public interface OwnerService extends CrudService<Owner,Long>{

    Set<Owner> findAllByLastName(String lastName);

}
