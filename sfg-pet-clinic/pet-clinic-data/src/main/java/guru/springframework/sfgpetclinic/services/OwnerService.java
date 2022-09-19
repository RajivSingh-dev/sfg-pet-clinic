package guru.springframework.sfgpetclinic.services;


import java.security.acl.Owner;
import java.util.Set;

public interface OwnerService extends CrudService<Owner,Long>{

    Owner findByLastName(String lastName);

}
